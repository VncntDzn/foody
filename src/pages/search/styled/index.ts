import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '5rem',
      position: 'relative',
      height: '80vh',
      [theme.breakpoints.up('sm')]: {
        paddingTop: '8rem',
        height: '50vh',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '38vh',
      },
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
    cardStyle: {
      margin: '1rem',
      borderRadius: '10px',
      [theme.breakpoints.up('sm')]: {
        width: '35vw',
      },
      [theme.breakpoints.up('lg')]: {
        width: '20vw',
      },
    },
    imageStyle: {
      [theme.breakpoints.up('sm')]: {
        height: '20vh',
      },
    },
  })
);

export default useStyles;
