import {createStore, compose} from 'redux';
import {persistState} from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import {INITIAL_STATE} from '../constants/InitialState';

const enhancer = compose(
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  ),
  DevTools.instrument()
);

export default function configureStore(initialState = INITIAL_STATE) {
  return createStore(rootReducer, initialState, enhancer);
}
