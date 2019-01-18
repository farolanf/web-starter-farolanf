import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import LocationIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import WalkIcon from '@material-ui/icons/DirectionsWalk';

import PlaceholderImg from '../../assets/img/placeholder-150.png';

const styles = (theme) => ({
  root: {
    marginBottom: 12,
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: 16,
    height: 110
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '2 0 0',
    overflow: 'hidden'
  },
  media: {
    flex: '1 0 0'
  },
  icon: {
    fontSize: 18,
    marginRight: 4,
    color: theme.palette.text.secondary
  },
  darkIcon: {
    fontSize: 18,
    marginRight: 4,
    color: theme.palette.text.primary
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 6
  },
  info: {
    display: 'flex'
  },
  infoGutter: {
    marginRight: 8
  },
  grow: {
    flex: 'auto'
  },
  link: {
    textDecoration: 'unset'
  }
});

const Info = withStyles(styles)(
  ({ Icon, text, textVariant, Text, classes, gutter, darkIcon, to }) => (
    <div className={classNames(classes.info, { [classes.infoGutter]: gutter })}>
      <Icon className={darkIcon ? classes.darkIcon : classes.icon} />
      {text && (
        to ? (
          <Link to={to} className={classes.link}>
            <Typography variant={textVariant} color="textPrimary" noWrap>
              {text}
            </Typography>
          </Link>
        ) : (
          <Typography variant={textVariant} color="textPrimary" noWrap>
            {text}
          </Typography>
        )
      )}
      {Text}
    </div>
  )
);

const RestaurantCard = ({ restaurant, classes }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Info
          Icon={LocationIcon}
          text={restaurant.title}
          textVariant="subtitle2"
          to={'/rest/' + restaurant.id}
        />
        <Typography variant="caption" color="textSecondary">
          {restaurant.cuisine}
        </Typography>
        <div className={classes.grow} />
        <Info
          Icon={StarIcon}
          darkIcon
          text={restaurant.description || 'Featured in NY Magazine'}
          textVariant="caption"
        />
      </CardContent>
      <CardMedia
        image={restaurant.images ? restaurant.images[0] : PlaceholderImg}
        title={restaurant.title}
        className={classes.media}
      />
    </Card>
    <div className={classes.infoRow}>
      <Typography variant="caption" color="textSecondary">
        {restaurant.open_closed + ' \u2022 0.6 miles away'}
      </Typography>
      <div className={classes.grow} />
      <Info Icon={WalkIcon} text="6min" textVariant="caption" gutter />
      <Info Icon={StarIcon} text={restaurant.rating + '/5'} textVariant="caption" />
    </div>
  </div>
);

export default withStyles(styles)(RestaurantCard);
