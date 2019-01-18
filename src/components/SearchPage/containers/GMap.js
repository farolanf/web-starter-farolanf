import { connect } from 'react-redux';

import GMap from '../GMap';

const mapStateToProps = (state) => ({
  search: state.search
});

export default connect(mapStateToProps)(GMap);
