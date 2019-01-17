export const SET_SEARCH_LOCATION = 'SET_SEARCH_LOCATION';
export const SET_SEARCH_COORD = 'SET_SEARCH_COORD';

export const setSearchLocation = (location) => ({
  type: SET_SEARCH_LOCATION,
  location
});

export const setSearchCoord = (coord) => ({
  type: SET_SEARCH_COORD,
  coord
});
