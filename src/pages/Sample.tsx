import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '3px solid green',
    },
  })
);

const Sample = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color='textSecondary'>
      Pro tip: See more on the Material-UI documentation.
    </Typography>
  );
};

export default Sample;
