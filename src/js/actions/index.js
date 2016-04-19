import * as types from '../constants/ActionTypes';

export function addEntity(entity) {
  return {
    type: types.ADD_ENTITY,
    payload: entity
  };
}
