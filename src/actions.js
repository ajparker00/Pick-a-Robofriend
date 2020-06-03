import { CHANGE_SEARCH_FIELD } from '.constants.js';

//Actions
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
