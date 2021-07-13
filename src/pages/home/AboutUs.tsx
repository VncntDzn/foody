import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import {
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '3px solid green',
    },
    image: {
      border: '3px solid red',
      position: 'absolute',
      zIndex: -1,
      height: '80%',
      width: '100%',
      overflow: 'hidden',
    },
  })
);

const AboutUs = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography> -- About Us -- </Typography>
      </Grid>
    </MainLayout>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
