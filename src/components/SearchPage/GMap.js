import React from 'react';
import { compose, withProps } from 'recompose';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const GMap = ({ data, lat, lng }) => {
  if (data.search_restaurants
    && data.search_restaurants.results
    && data.search_restaurants.results.length > 0) {
    lat = data.search_restaurants.results[0].lat;
    lng = data.search_restaurants.results[0].lon;
  }

  return (
    <GoogleMap
      defaultOptions={{
        mapTypeControl: false,
        fullscreenControl: false
      }}
      center={{ lat: lat || -34.397, lng: lng || 150.644 }}
      zoom={14}
    >
      {data.search_restaurants
        && data.search_restaurants.results
        && data.search_restaurants.results.length > 0
        && data.search_restaurants.results.map((r) => (
          <Marker
            key={r.id}
            position={{ lat: r.lat, lng: r.lon }}
            title={r.title}
            label={r.title[0]}
            clickable
          />
        ))
      }
    </GoogleMap>
  );
};

export default compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCFBREx560fuIxs6kM7MvDdQOSn7_5o8Bc&v=3.exp',
    containerElement: <div style={{ height: '100%' }} />,
    loadingElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(GMap);
