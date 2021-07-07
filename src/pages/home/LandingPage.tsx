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
      position: 'relative',
      marginTop: '8rem',
      color: '#FFFFFF',
    },
    buttonStyle: {
      borderRadius: '7px',
      backgroundColor: '#c2b928',
      color: '#FFFFFF',
      margin: '1rem 0',
    },
    image: {
      zIndex: -1,
      position: 'absolute',
      height: '80%',
      width: '100%',
      overflow: 'hidden',
      top: 0,
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

const LandingPage = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography variant='overline'>Don't know what to cook?</Typography>
        <Typography variant='h4'>Find your favorite food at Foody!</Typography>
        <Typography variant='subtitle1'>
          We've got everything for every dish.
        </Typography>
        <Button className={styles.buttonStyle} variant='contained'>
          Search Food
        </Button>
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
