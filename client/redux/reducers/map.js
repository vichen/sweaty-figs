import {
  CHANGE_ROUTES,
  RECEIVE_ROUTES
} from '../constants/ActionTypes';

const initialState = {
  directions: null,
};

export function directions(state = initialState.directions, action) {
  switch (action.type) {
    case CHANGE_ROUTES:
      return action.directions;
    case RECEIVE_ROUTES:
      return state;
    default:
      return state;
  }
}