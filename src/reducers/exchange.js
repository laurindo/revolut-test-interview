import * as types from '../constants/ActionTypes';

const initialState = {
  exchanges: [],
};

export default function exchange(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EXCHANGE:
      return {
        ...state,
        exchanges: [
          action.payload,
          ...state.exchanges,
        ],
      };

    default:
      return state;
  }
}
