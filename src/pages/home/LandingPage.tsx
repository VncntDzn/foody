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
import Food from 'assets/home/Food.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#FFFFFF',
      paddingTop: '7rem',
      position: 'relative',
      height: '80vh',

      [theme.breakpoints.up('sm')]: {
        paddingTop: '8rem',
        height: '50vh',
      },
    },
    buttonStyle: {
      borderRadius: '7px',
      backgroundColor: '#c2b928',
      color: '#FFFFFF',
      margin: '1rem 0',
    },

    textsContainer: {
      [theme.breakpoints.up('sm')]: {
        width: '50vw',
      },
      [theme.breakpoints.up('lg')]: {
        width: '40vw',
      },
    },
    sloganMain: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
    },
    image: {
      height: '80vh',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      [theme.breakpoints.up('sm')]: {
        height: '50vh',
      },
      [theme.breakpoints.up('lg')]: {
        height: '85vh',
      },
    },
  })
);

const LandingPage = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Grid className={styles.textsContainer}>
          <Typography variant='subtitle1'>Don't know what to cook?</Typography>
          <Typography className={styles.sloganMain}>
            Find your favorite food at{' '}
            <span style={{ color: '#B76A40', fontWeight: 600 }}>Foodie.</span>
          </Typography>
          <Typography variant='subtitle1'>
            We've got everything for every dish.
          </Typography>
          <Button className={styles.buttonStyle} variant='contained'>
            Search Food
          </Button>
        </Grid>
      </Grid>
      <div className={styles.image}>
        <Image
          src={Food}
          alt='Vincent'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </MainLayout>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
