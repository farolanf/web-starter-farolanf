import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';

import ListIcon from '@material-ui/icons/List';
import TuneIcon from '@material-ui/icons/Tune';
import ViewIcon from '@material-ui/icons/ViewCarousel';

const styles = {
  root: {
    minHeight: 54
  },
  brand: {
    fontStyle: 'italic',
    flex: 'auto'
  }
};

const Header = ({ classes }) => (
  <Toolbar variant="dense" disableGutters className={classes.root}>
    <Typography
      variant="h6"
      color="primary"
      className={classes.brand}
    >
      Foodsy
    </Typography>
    <IconButton>
      <ListIcon />
    </IconButton>
    <IconButton>
      <ViewIcon />
    </IconButton>
    <Chip
      variant="outlined"
      label="Filter"
      clickable
      onDelete={() => {}}
      deleteIcon={<TuneIcon style={{ fontSize: '1.2rem' }} />}
    />
  </Toolbar>
);

export default withStyles(styles)(Header);
