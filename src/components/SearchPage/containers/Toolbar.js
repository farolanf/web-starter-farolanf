import { connect } from 'react-redux';

import Toolbar from '../Toolbar';

import {
  setSearchLocation,
  setSearchCoord
} from '../../../actions/search';

const mapDispatchToProps = (dispatch) => ({
  setSearchLocation: (location) => dispatch(setSearchLocation(location)),
  setSearchCoord: (coord) => dispatch(setSearchCoord(coord))
});

export default connect(null, mapDispatchToProps)(Toolbar);
