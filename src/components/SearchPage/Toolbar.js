import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
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

  render() {
    const { classes } = this.props;
    const { location } = this.state;

    return (
      <div>
        <Grid container spacing={8}>
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
