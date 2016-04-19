import * as types from '../constants/ActionTypes';
import {INITIAL_STATE} from '../constants/InitialState';

export default function planner(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_ENTITY:
      return state;
    default:
      return state;
  }
}
