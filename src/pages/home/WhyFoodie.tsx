import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Hidden,
} from '@material-ui/core';

import Image from 'next/image';

import Vegetables from 'assets/whyfoodie/vegetables.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '3px solid red',
      position: 'relative',
      height: '50vh',
      margin: '0 -1rem',
      color: 'white',
    },

    image: {
      height: '50vh',
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      left: 0,
      right: 0,
      [theme.breakpoints.up('sm')]: {
        height: '50vh',
      },
      [theme.breakpoints.up('lg')]: {
        height: '60vh',
      },
    },
  })
);
const WhyFoodie = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h4'> -- WHY FOODIE -- </Typography>
        <Typography color='primary'>THE BENEFITS OF USING FOODIE</Typography>
      </div>
      <div className={styles.image}>
        <Image
          src={Vegetables}
          alt='Vegetables'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </Grid>
  );
};

WhyFoodie.propTypes = {};

export default WhyFoodie;
