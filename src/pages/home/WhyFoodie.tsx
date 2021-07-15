import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
} from '@material-ui/core';

import Image from 'next/image';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Vegetables from 'assets/whyfoodie/vegetables.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '50vh',
      margin: '0 -1rem',
      color: 'white',
      [theme.breakpoints.up('sm')]: {
        height: '25vh',
        margin: '2rem -1rem',
      },
    },
    image: {
      height: '50vh',
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      left: 0,
      right: 0,
      [theme.breakpoints.up('sm')]: {
        height: '25vh',
      },
    },
    textsContainer: {
      [theme.breakpoints.up('md')]: {
        padding: '0 3rem',
      },
    },
  })
);
const WhyFoodie = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <Typography variant='h4'> -- WHY FOODIE -- </Typography>
        <Typography color='primary'>THE BENEFITS OF USING FOODIE</Typography>
      </div>
      <Grid
        className={styles.textsContainer}
        container
        alignItems='center'
        justify='center'
      >
        <Grid container item direction='row' alignItems='center'>
          <IconButton color='primary'>
            <FastfoodIcon />
          </IconButton>
          <Typography variant='subtitle1'>
            Cook food easily with Foodie
          </Typography>
        </Grid>
        <Grid container item direction='row' alignItems='center'>
          <IconButton color='primary'>
            <SearchIcon />
          </IconButton>
          <Typography variant='subtitle1'>
            Search your food easily using Foodie
          </Typography>
        </Grid>
      </Grid>
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
