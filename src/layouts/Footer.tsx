import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      margin: '0 -1rem',
      padding: '0 1rem',
      color: 'white',
    },
  })
);

const Footer = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <Grid>
        <Typography variant='h6'>Foodie by workvpdizon@gmail.com</Typography>
      </Grid>
    </Grid>
  );
};
export default Footer;
