import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import StepSlides from './StepSlides';
import testimonialsData from 'utils/data/TestimonialsData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '3rem',
      textAlign: 'center',
    },
  })
);

const Steps = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography variant='h5'> -- WHAT OTHERS SAY -- </Typography>
        <Typography color='primary'>CHECK OUT THESE FOODIE REVIEWS</Typography>
        <StepSlides data={testimonialsData} />
      </Grid>
    </MainLayout>
  );
};

Steps.propTypes = {};

export default Steps;
