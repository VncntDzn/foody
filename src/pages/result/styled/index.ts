import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '80vh',
      padding: '1rem',
      paddingTop: '5rem',
      [theme.breakpoints.up('sm')]: {
        paddingTop: '8rem',
        height: '50vh',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: '38vh',
      },
    },

    youtubeContainer: {
      alignSelf: 'center',
      height: '50vh',
      width: '90vw',
      marginTop: '1rem',
      border: '3px solid red',
      [theme.breakpoints.up('sm')]: {
        height: '40vh',
        width: '82vw',
      },
      [theme.breakpoints.up('md')]: {
        height: '35vh',
        width: '78vw',
      },
      [theme.breakpoints.up('lg')]: {
        height: '95vh',
        width: '81vw',
      },
    },
    mealName: {
      fontSize: 'clamp(1.6rem, 5vw, 2rem)',
      fontWeight: 700,
    },
  })
);

export default useStyles;
