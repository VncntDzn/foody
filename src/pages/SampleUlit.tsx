import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '3px solid green',
    },
    text: {
      fontSize: '2rem',
    },
    sad: {
      border: '3px solid blue',
    },
  })
);

const SampleUlit = () => {
  const classes = useStyles();
  return (
    <Link className={classes.root}>
      <Typography className={classes.text}>VIncent</Typography>
      <Grid className={classes.sad}>IM A BOX</Grid>
    </Link>
  );
};

export default SampleUlit;
