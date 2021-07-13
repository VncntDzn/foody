import { useState } from 'react';
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { I_Navigation } from 'types/I_Navigation';
import ElevatedScroll from './ElevatedScroll';
import PropTypes from 'prop-types';
import { Cross as Hamburger } from 'hamburger-react';
import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoStyle: {
      fontSize: 'clamp(1.4rem, 5vw, 1.7rem)',
      fontWeight: 500,
      color: '#FFFFFF',
      textShadow: 'none',
    },
  })
);

const Navbar = (props: I_Navigation.I_Navbar) => {
  const styles = useStyles();
  const [toggleBurger, setToggleBurger] = useState<boolean>(false);
  const handleToggle = () => {
    setToggleBurger(!toggleBurger);
  };
  return (
    <>
      <ElevatedScroll {...props}>
        <AppBar color='transparent' style={{ backdropFilter: 'blur(3px)' }}>
          <Toolbar>
            <Grid container item alignItems='center' justify='space-between'>
              <Typography className={styles.logoStyle}>Title</Typography>
              <Hamburger
                toggled={toggleBurger}
                toggle={() => handleToggle()}
                size={21}
                color='#FFFFFF'
              />
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevatedScroll>

      {toggleBurger && <MobileMenu />}
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
