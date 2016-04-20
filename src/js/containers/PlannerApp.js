import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';
import AddEntityForm from '../components/AddEntityForm';
import List from '../components/List';
import {Grid, Row, Col} from 'react-bootstrap';

class PlannerApp extends Component {
  render() {
    const room = {
      width: this.props.width,
      height: this.props.height,
      entities: this.props.entities
    };
    
    const {addEntity, setEntityWidth, setEntityHeight, deleteEntity} = this.props.actions;

    return <div>
      <Header room={room}/>
      <Grid fluid>
        <AddEntityForm addEntity={addEntity}/>
        <Row>
          <Col lg={6}>
            <List entities={room.entities} setEntityWidth={setEntityWidth} setEntityHeight={setEntityHeight} deleteEntity={deleteEntity} />
          </Col>
          <Col lg={6}>
    
          </Col>
        </Row>
      </Grid>
    </div>;
  }
}

function mapState(state) {
  return state.toJS();
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(PlannerApp);
