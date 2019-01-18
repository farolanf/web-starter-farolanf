import { connect } from 'react-redux';

import Toolbar from '../Toolbar';

import { setSearchLocation } from '../../../actions/search';

const mapDispatchToProps = (dispatch) => ({
  setSearchLocation: (location) => dispatch(setSearchLocation(location))
});

export default connect(null, mapDispatchToProps)(Toolbar);
