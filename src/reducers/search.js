import {
  SET_SEARCH_LOCATION,
  SET_SEARCH_COORD
} from '../actions/search';

const search = (state = {
  location: '',
  coord: {
    lat: 0,
    lon: 0
  },
  useCoord: false
}, action) => {
  switch (action.type) {
  case SET_SEARCH_LOCATION:
    return {
      ...state,
      location: action.location,
      useCoord: false
    };
  case SET_SEARCH_COORD:
    return {
      ...state,
      coord: action.coord,
      useCoord: true
    };
  default:
    return state;
  }
};

export default search;
