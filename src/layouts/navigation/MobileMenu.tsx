import React from 'react';
import PropTypes from 'prop-types';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';

import ActiveLink from 'components/ActiveLink';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      height: '100vh',
      top: 0,
      backdropFilter: 'blur(4px)',
      width: '80vw',
      left: '4.5rem',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'space-evenly',
      padding: '50% 0',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        right: 0,
        left: '19vw',
      },
      [theme.breakpoints.up('md')]: {
        height: '70vh',
        width: '50vw',
        left: '49vw',
        padding: ' 0',
      },
      [theme.breakpoints.up('lg')]: {
        height: '100vh',
        padding: '10%',
      },
    },
  })
);

const MobileMenu = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <ActiveLink href='/'>Home</ActiveLink>
      <ActiveLink href='/search'>Search Food</ActiveLink>
      <ActiveLink href='/home/AboutUs' as='/home/AboutUs'>
        About
      </ActiveLink>
      <ActiveLink href='/credits'>Credits</ActiveLink>
    </Grid>
  );
};

MobileMenu.propTypes = {};

export default MobileMenu;
