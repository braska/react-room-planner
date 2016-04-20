import * as types from '../constants/ActionTypes';
import {INITIAL_STATE} from '../constants/InitialState';

export default function planner(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_ENTITY:
      return state.updateIn(['entities'], list => list.push(action.payload));
    case types.SET_ENTITY_WIDTH:
      return state.updateIn(['entities', state.get('entities').indexOf(action.payload.entity)], entity => Object.assign({}, entity, {width: action.payload.width}));
    case types.SET_ENTITY_HEIGHT:
      return state.updateIn(['entities', state.get('entities').indexOf(action.payload.entity)], entity => Object.assign({}, entity, {height: action.payload.height}));
    case types.DELETE_ENTITY:
      return state.updateIn(['entities'], list => list.delete(list.indexOf(action.payload)));
    default:
      return state;
  }
}
