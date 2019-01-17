import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import InputBase from '@material-ui/core/InputBase';

import LocationIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
  root: {
  },
  myLocation: {
    paddingRight: '16px !important',
    backgroundImage: 'linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)',
    '&:hover': {
      backgroundImage: 'linear-gradient( 135deg, #FFEE85 10%, #FE942B 100%)'
    }
  },
  buttonLabel: {
    textTransform: 'none'
  },
  locationInput: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 25,
    padding: '1px 6px'
  },
  icon: {
    marginRight: 4
  }
});

const MyLocationButton = ({ classes, onClick }) => (
  <Fab
    variant="extended"
    color="primary"
    size="small"
    classes={{
      root: classes.myLocation,
      label: classes.buttonLabel
    }}
    onClick={onClick}
  >
    <LocationIcon className={classes.icon} />
    Use my location
  </Fab>
);

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  onChangeLocation = (e) => {
    this.setState({ location: e.target.value });
  }

  onSubmitLocation = (e) => {
    e.preventDefault();

    const { setSearchLocation } = this.props;
    const { location } = this.state;

    setSearchLocation(location);
    this.setState({ location: '' });
  }

  onUseMyLocation = () => {
    const { setSearchCoord } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setSearchCoord({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        });
      });
    }
    this.setState({ location: '' });
  }

  render() {
    const { classes } = this.props;
    const { location } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md="auto">
            <MyLocationButton classes={classes} onClick={this.onUseMyLocation} />
          </Grid>
          <Grid item xs={12} md="auto">
            <Paper className={classes.locationInput}>
              <SearchIcon className={classes.icon} />
              <form onSubmit={this.onSubmitLocation}>
                <InputBase
                  placeholder="Search food in your area..."
                  value={location}
                  onChange={this.onChangeLocation}
                />
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Toolbar.propTypes = {
  setSearchLocation: PropTypes.func.isRequired
};

export default withStyles(styles)(Toolbar);
