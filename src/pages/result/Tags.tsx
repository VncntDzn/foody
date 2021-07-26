import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

import useStyles from './styled';
const Tags = ({ data }) => {
  const styles = useStyles();
  return (
    <Grid container wrap='wrap' justify='flex-start'>
      <Grid
        container
        item
        justify='center'
        alignContent='center'
        alignItems='center'
        xs={3}
        md={2}
        sm={2}
        lg={1}
      >
        <Typography color='primary' align='center'>
          Tags:
        </Typography>
      </Grid>

      {data?.strTags?.split(',').map((tag, i) => (
        <Typography key={i} variant='subtitle1'>
          {tag}, &nbsp;
        </Typography>
      ))}
    </Grid>
  );
};

Tags.propTypes = {};

export default Tags;
