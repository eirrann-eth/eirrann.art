import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(4),
    textShadow: theme.typography.h2.textShadow,
  },
  body: {
    maxWidth: '50ch',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.secondary.main,
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Contact eirrann.eth
      </Typography>
      <Typography variant="body1" className={classes.body}>
        If you have any questions or feedback, please don't hesitate to get in touch! You can reach out with a message on Twitter.
      </Typography>
      <Link href="https://twitter.com/eirrann_eth" target="_blank" className={classes.link}>
        Message on Twitter
      </Link>
    </div>
  );
}

export default Contact;
