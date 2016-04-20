import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import PlannerApp from './PlannerApp';
import rootReducer from '../reducers';

import DevTools from './DevTools';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    const store = this.store;
    const devTools = __DEV__ ? (<DevTools />) : '';

    return (
      <Provider store={store}>
        <div>
          <PlannerApp />
          {devTools}
        </div>
      </Provider>
    );
  }
}
