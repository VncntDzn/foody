import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import Slides from './Slides';
import stepsData from 'utils/data/StepsData';
import MainLayout from 'layouts/MainLayout';

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
        <Slides data={stepsData} />
      </Grid>
    </MainLayout>
  );
};

Steps.propTypes = {};

export default Steps;
