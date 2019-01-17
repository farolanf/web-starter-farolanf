import { SET_SEARCH_LOCATION } from '../actions/search';

const search = (state = {
  location: ''
}, action) => {
  switch (action.type) {
  case SET_SEARCH_LOCATION:
    return { ...state, location: action.location };
  default:
    return state;
  }
};

export default search;
