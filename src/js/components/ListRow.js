import React, {PropTypes, Component} from 'react';
import {Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

export default class ListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.entity.width,
      height: this.props.entity.height
    }
  }

  handleWidthChange(e) {
    this.setState({width: +e.target.value}, () => {
      this.widthError = !(this.state.width > 0 && this.state.width % 1 === 0);
      if (!this.widthError) {
        this.props.setEntityWidth(this.props.entity, this.state.width);
      }
    });
  }

  handleHeightChange(e) {
    this.setState({height: +e.target.value}, () => {
      this.heightError = !(this.state.height > 0 && this.state.height % 1 === 0);
      if (!this.widthError) {
        this.props.setEntityHeight(this.props.entity, this.state.height);
      }
    });
  }

  render() {
    return <tr>
      <td>{this.props.number}</td>
      <td>{this.props.entity.name}</td>
      <td>X: {this.props.entity.x}, Y: {this.props.entity.y}</td>
      <td>
        <FormGroup validationState={(this.widthError || this.heightError) ? 'error' : undefined}>
          <InputGroup>
            <FormControl type="number" value={this.state.width} onChange={::this.handleWidthChange} />
            <InputGroup.Addon>*</InputGroup.Addon>
            <FormControl type="number" value={this.state.height} onChange={::this.handleHeightChange} />
          </InputGroup>
        </FormGroup>
      </td>
      <td>
        <Button bsSize="xsmall" bsStyle="danger" onClick={event => this.props.deleteEntity(this.props.entity)}>Remove</Button>
        {' '}
        <Button bsSize="xsmall">Rotate</Button>
      </td>
    </tr>;
  }
}

ListRow.propTypes = {
  number: PropTypes.number.isRequired,
  entity: PropTypes.object.isRequired,
  setEntityWidth: PropTypes.func.isRequired,
  setEntityHeight: PropTypes.func.isRequired,
  deleteEntity: PropTypes.func.isRequired
};
