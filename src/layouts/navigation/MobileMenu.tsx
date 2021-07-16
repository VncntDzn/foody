import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
} from '@material-ui/core';
import Searchbar from 'components/Searchbar';
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
      padding: '50% 1rem',
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
        left: '74vw',
        height: '100vh',
        width: '25vw',
        padding: '20% 0',
      },
    },
  })
);

const MobileMenu = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <ActiveLink href='/'>Home</ActiveLink>
      <ActiveLink href='/credits'>Credits</ActiveLink>
      <Hidden smUp>
        <Searchbar />
      </Hidden>
    </Grid>
  );
};

MobileMenu.propTypes = {};

export default MobileMenu;
