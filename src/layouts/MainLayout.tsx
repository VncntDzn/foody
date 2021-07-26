import { I_Navigation } from 'types/I_Navigation';
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import PropTypes from 'prop-types';
import Navbar from './navigation/Navbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        padding: '0 5vw',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 8vw',
      },
    },
  })
);
const MainLayout = ({ children }: I_Navigation.I_MainLayout) => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <Navbar />
      {children}
    </Grid>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
