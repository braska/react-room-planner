import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Info from '../components/Info';

class PlannerApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    const state = this.store.getState();

    return <div className="container-fluid intro">
      <div className="container">
        <h1 className="intro-title">Room Planner</h1>
        <p className="intro-description">Easy to plan</p>
      </div>
      <Info width={state.roomWidth} height={state.roomHeight} count={state.entities.length} />
    </div>;
  }
}

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(PlannerApp);
