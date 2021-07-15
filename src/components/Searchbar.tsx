import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const Searchbar = () => {
  return (
    <TextField
      autoFocus
      focused
      placeholder='Search food here'
      variant='outlined'
      InputProps={{
        style: {
          color: 'white',
        },
        endAdornment: (
          <InputAdornment position='start'>
            <IconButton style={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

Searchbar.propTypes = {};

export default Searchbar;
