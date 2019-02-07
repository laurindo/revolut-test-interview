import * as types from '../constants/ActionTypes';

const initialState = {
  show: false,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        show: true,
      };

    case types.HIDE_MODAL:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
}
