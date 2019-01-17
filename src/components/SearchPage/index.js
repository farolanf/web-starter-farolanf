import React, { Component } from 'react';

import { Query } from 'react-apollo';
import { RESTAURANT_SEARCH_QUERY } from '../../graphql/queries';

import Main from './Main';

class SearchPage extends Component {
  render() {
    const { search: { location, coord, useCoord } } = this.props;
    const searchVars = {};

    if (useCoord) {
      searchVars.lat = coord.lat;
      searchVars.lon = coord.lon;
    } else {
      searchVars.address = location || 'Chicago';
    }

    return (
      // Variables can be either lat and lon OR address
      <Query
        query={RESTAURANT_SEARCH_QUERY}
        variables={searchVars}
      >
        {({ loading, error, data = {} }) => {
          console.log('DO SOMETHING SMART WITH THIS DATA');
          console.log('data', data);
          console.log('error', error);

          return <Main data={data} loading={loading} />;
        }}
      </Query>
    );
  }
}

export default SearchPage;
