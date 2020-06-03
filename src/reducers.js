import { CHANGE_SEARCH_FIELD } from '.constants.js';

//Initial state
const initialState = {
  searchField: '',
};

//Created a reducer
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case value:
      CHANGE_SEARCH_FIELD: return Object.assign({}, state, {
        searchField: action.payload,
      });
    default:
      return state;
  }
};
