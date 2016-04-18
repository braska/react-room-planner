import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class PlannerApp extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render () {
        const state = this.store.getState();

        return (<div></div>);
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