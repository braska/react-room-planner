import React, {PropTypes, Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default class AddEntityForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      width: 100,
      height: 120,
      color: '',
      errors: {}
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    this.validate();
  }

  setErrorState(attribute, value) {
    var errors = this.state.errors;
    if (value) {
      errors[attribute] = value;
    } else {
      delete errors[attribute];
    }

    this.setState({errors: errors});
  }

  validate() {
    this.setErrorState('name', this.state.name.length == 0);
    this.setErrorState('width', !(this.state.width > 0 && Number(this.state.width) === this.state.width && this.state.width % 1 === 0));
    this.setErrorState('height', !(this.state.height > 0 && Number(this.state.height) === this.state.height && this.state.height % 1 === 0));
    this.setErrorState('color', !(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.state.color)));
  }

  handleNameChange(e) {
    this.setState({name: e.target.value}, () => {
      this.validate();
    });
  }

  handleWidthChange(e) {
    this.setState({width: +e.target.value}, () => {
      this.validate();
    });
  }

  handleHeightChange(e) {
    this.setState({height: +e.target.value}, () => {
      this.validate();
    });
  }

  handleColorChange(e) {
    this.setState({color: e.target.value}, () => {
      this.validate();
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.addEntity({
      name: this.state.name,
      width: this.state.width,
      height: this.state.height,
      color: this.state.color,
      x: 0,
      y: 0
    });
    this.setState(this.initialState, this.validate);
  }

  render() {
    return <div>
      <h3>Add entity</h3>
      <Form onSubmit={::this.onFormSubmit}>
        <FormGroup controlId="formName" validationState={this.state.errors.name == true ? "error" : undefined}>
          <ControlLabel>Name:</ControlLabel>
          {' '}
          <FormControl type="text" placeholder='For example, "My chair"' value={this.state.name} onChange={::this.handleNameChange}/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formWidth" validationState={this.state.errors.width == true ? "error" : undefined}>
          <ControlLabel>Width:</ControlLabel>
          {' '}
          <FormControl type="number" value={this.state.width} onChange={::this.handleWidthChange}/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formHeight" validationState={this.state.errors.height == true ? "error" : undefined}>
          <ControlLabel>Height:</ControlLabel>
          {' '}
          <FormControl type="number" value={this.state.height} onChange={::this.handleHeightChange}/>
        </FormGroup>
        {' '}
        <FormGroup controlId="formColor" validationState={this.state.errors.color == true ? "error" : undefined}>
          <ControlLabel>Color (HEX):</ControlLabel>
          {' '}
          <FormControl type="text" placeholder='For example, "#000000"' value={this.state.color} onChange={::this.handleColorChange}/>
        </FormGroup>
        {' '}
        <Button type="submit" ref="submitBtn" disabled={Object.getOwnPropertyNames(this.state.errors).length !== 0}>
          Add
        </Button>
      </Form>
    </div>;
  }
}

AddEntityForm.propTypes = {
  addEntity: PropTypes.func.isRequired
};
