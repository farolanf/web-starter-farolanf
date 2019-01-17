import React from 'react';
import { compose, withProps } from 'recompose';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const GMap = ({ data, search }) => {
  const { coord, useCoord } = search;

  // center on my location
  let centerLat = coord.lat || -34.397;
  let centerLng = coord.lon || 150.644;

  // if not using my location then center on the first restaurant
  if (!useCoord
    && data.search_restaurants
    && data.search_restaurants.results
    && data.search_restaurants.results.length > 0) {
    centerLat = data.search_restaurants.results[0].lat;
    centerLng = data.search_restaurants.results[0].lon;
  }

  return (
    <GoogleMap
      defaultOptions={{
        mapTypeControl: false,
        fullscreenControl: false
      }}
      center={{ lat: centerLat, lng: centerLng }}
      zoom={14}
    >
      {useCoord && (
        <Marker
          title="My location"
          position={{
            lat: coord.lat,
            lng: coord.lon
          }}
        />
      )}
      {data.search_restaurants
        && data.search_restaurants.results
        && data.search_restaurants.results.length > 0
        && data.search_restaurants.results.map((r) => (
          <Marker
            key={r.id}
            position={{ lat: r.lat, lng: r.lon }}
            title={r.title}
            label={r.title[0]}
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
