import { connect } from 'react-redux';

import SearchPage from '../components/SearchPage';

const mapStateToProps = (state) => ({
  searchLocation: state.search.location
});

export default connect(mapStateToProps)(SearchPage);
