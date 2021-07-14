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
import stepsData from 'utils/data/StepsData';

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
        <Typography variant='h5'> -- HOW IT WORKS -- </Typography>
        <Typography color='primary'>DINNER IS JUST 3 STEPS AWAY</Typography>
        <StepSlides data={stepsData} />
      </Grid>
    </MainLayout>
  );
};

Steps.propTypes = {};

export default Steps;
