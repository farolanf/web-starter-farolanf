import React from 'react';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

import Header from './Header';
import RestaurantCard from './RestaurantCard';
import Toolbar from './containers/Toolbar';

import GMap from './containers/GMap';

const styles = (theme) => ({
  root: {
    paddingLeft: 10,
    backgroundColor: theme.palette.background.default,
    height: 'unset !important'
  },
  map: {
    position: 'sticky',
    top: 0,
    marginLeft: 8,
    marginTop: 4,
    borderRadius: 8,
    overflow: 'hidden',
    height: '100vh'
  },
  toolbarContainer: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: 8,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      zIndex: 1,
      padding: 6
    }
  }
});

const Main = ({ classes, data, loading }) => (
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={12} md={4}>
        <Hidden mdUp>
          <div className={classes.toolbarContainer}>
            <Toolbar />
          </div>
        </Hidden>
        <Header />
        {loading && <CircularProgress />}
        {data.search_restaurants
          && data.search_restaurants.results
          && data.search_restaurants.results.length > 0
          ? (
            <div>
              {data.search_restaurants.results.map((r) => {
                return <RestaurantCard key={r.id} restaurant={r} />;
              })}
            </div>
          ) : <div>No Results</div>
        }
      </Grid>
      <Hidden smDown>
        <Grid item xs>
          <div className={classes.map}>
            <div className={classes.toolbarContainer}>
              <Toolbar />
            </div>
            <GMap data={data} />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  </div>
);

export default withStyles(styles)(Main);
