import * as types from '../constants/ActionTypes';

export function addEntity(entity) {
  return {
    type: types.ADD_ENTITY,
    payload: entity
  };
}

export function setEntityWidth(entity, width) {
  return {
    type: types.SET_ENTITY_WIDTH,
    payload: {
      entity: entity,
      width: width
    }
  }
}

export function setEntityHeight(entity, height) {
  return {
    type: types.SET_ENTITY_HEIGHT,
    payload: {
      entity: entity,
      height: height
    }
  }
}

export function deleteEntity(entity) {
  return {
    type: types.DELETE_ENTITY,
    payload: entity
  }
}

export function moveEntity(entity, x, y) {
  return {
    type: types.MOVE_ENTITY,
    payload: {
      entity: entity,
      x: x,
      y: y
    }
  };
}
