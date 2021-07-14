import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

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
    },
  })
);

const MobileMenu = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <Typography>Home</Typography>
      <Typography>About</Typography>
      <Typography>Credits</Typography>
    </Grid>
  );
};

MobileMenu.propTypes = {};

export default MobileMenu;
