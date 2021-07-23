import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
} from '@material-ui/core';
import { I_Navigation } from 'types/I_Navigation';
import { Searchbar } from 'components';
import { Cross as Hamburger } from 'hamburger-react';
import ElevatedScroll from './ElevatedScroll';
import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoStyle: {
      fontSize: 'clamp(1.4rem, 5vw, 1.7rem)',
      color: '#B76A40',
      fontWeight: 600,
      [theme.breakpoints.up('sm')]: {
        marginLeft: '5vw',
      },
    },
  })
);

const Navbar = (props: I_Navigation.I_Navbar) => {
  const styles = useStyles();
  const router = useRouter();
  const [backgroundColor, setBackgroundColor] = useState<string>('transparent');
  const [toggleBurger, setToggleBurger] = useState<boolean>(false);

  const PATHNAME = router.pathname;

  const handleToggle = (): void => {
    setToggleBurger(!toggleBurger);
  };

  const handleRouting = (): void => {
    router.push('/');
  };
  useEffect(() => {
    if (PATHNAME === '/') {
      setBackgroundColor('transparent');
    } else {
      setBackgroundColor('white');
    }
  }, [PATHNAME]);
  return (
    <>
      <ElevatedScroll {...props}>
        <AppBar
          style={{
            backdropFilter: 'blur(3px)',
            backgroundColor: backgroundColor,
          }}
        >
          <Toolbar>
            <Grid container item alignItems='center' justify='space-between'>
              <Grid
                container
                item
                alignItems='center'
                justify='center'
                xs={3}
                sm={2}
              >
                <Typography
                  onClick={handleRouting}
                  className={styles.logoStyle}
                >
                  Foodie
                </Typography>
              </Grid>
              <Grid
                container
                alignItems='center'
                item
                direction='row'
                justify='space-evenly'
                xs={2}
                sm={6}
                md={6}
                lg={4}
              >
                <Hidden xsDown>
                  <Searchbar />
                </Hidden>
                <Hamburger
                  toggled={toggleBurger}
                  toggle={() => handleToggle()}
                  size={21}
                  color='#B76A40'
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevatedScroll>

      {toggleBurger && <MobileMenu />}
    </>
  );
};

export default Navbar;
