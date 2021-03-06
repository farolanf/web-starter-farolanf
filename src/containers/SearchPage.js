import { connect } from 'react-redux';

import SearchPage from '../components/SearchPage';

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(mapStateToProps)(SearchPage);
