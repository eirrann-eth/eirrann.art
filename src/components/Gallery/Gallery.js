import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  galleryTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    marginBottom: theme.spacing(2),
  },
  gallerySubtitle: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    marginBottom: theme.spacing(3),
  },
}));

function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.galleryContainer}>
      <Typography variant="h4" component="h1" className={classes.galleryTitle} gutterBottom>
        Gallery
      </Typography>
      <Typography variant="h6" component="h2" className={classes.gallerySubtitle}>
        Coming soon™
      </Typography>
    </div>
  );
}

export default Gallery;
