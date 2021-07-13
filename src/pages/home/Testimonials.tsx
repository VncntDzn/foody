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
import Image from 'next/image';
import Leafy from 'assets/home/Leafy.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      marginTop: '8rem',
      color: '#FFFFFF',
      paddingTop: '50vh',
    },

    image: {
      border: '3px solid red',
      zIndex: -1,
      position: 'fixed',
      height: '80%',
      width: '100%',
      overflow: 'hidden',
      top: '32rem',
      left: 0,
      [theme.breakpoints.up('sm')]: {
        height: '50%',
      },
      [theme.breakpoints.up('lg')]: {
        height: '80%',
      },
    },
  })
);

const AboutUs = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>sad</Grid>
    </MainLayout>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
