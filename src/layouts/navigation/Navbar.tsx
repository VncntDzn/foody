import { AppBar, Grid, Typography, Toolbar } from '@material-ui/core';
import { I_Navigation } from 'types/I_Navigation';
import ElevatedScroll from './ElevatedScroll';
import PropTypes from 'prop-types';

const Navbar = (props: I_Navigation.I_Navbar) => {
  return (
    <>
      <ElevatedScroll {...props}>
        <AppBar color='transparent'>
          <Toolbar>
            <Grid container item alignItems='center' justify='space-between'>
              <Typography>Foody</Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevatedScroll>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
