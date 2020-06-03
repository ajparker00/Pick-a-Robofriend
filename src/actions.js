import { CHANGE_SEARCH_FIELD } from './constants.js';

//created setSearchField actions
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
