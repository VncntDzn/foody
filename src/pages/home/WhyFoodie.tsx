import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
} from '@material-ui/core';
import Image from 'next/image';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Vegetables from 'assets/whyfoodie/vegetables.jpg';
import reasons from 'utils/data/Reasons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: '50vh',
      margin: '0 -1rem',
      color: 'white',
      [theme.breakpoints.up('sm')]: {
        height: '30vh',
        margin: '2rem -1rem',
      },
    },
    image: {
      height: '50vh',
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      left: 0,
      right: 0,
      [theme.breakpoints.up('sm')]: {
        height: '25vh',
      },
      [theme.breakpoints.up('lg')]: {
        height: '30vh',
      },
    },
    textsContainer: {
      [theme.breakpoints.up('md')]: {
        padding: '0 7rem',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '0 13rem',
      },
    },
    reasonStyle: {
      fontSize: 'clamp(1rem, 4.5vw, 1.4rem)',
    },
  })
);
const WhyFoodie = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.root}>
      <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <Typography variant='h4'> -- WHY FOODIE -- </Typography>
        <Typography color='primary'>THE BENEFITS OF USING FOODIE</Typography>
      </div>
      <Grid
        className={styles.textsContainer}
        container
        alignItems='center'
        justify='center'
      >
        {reasons.map(({ id, reason }) => (
          <Grid container item direction='row' alignItems='center' key={id}>
            <IconButton color='primary'>
              <FastfoodIcon />
            </IconButton>
            <Typography variant='subtitle1' className={styles.reasonStyle}>
              {reason}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <div className={styles.image}>
        <Image
          src={Vegetables}
          alt='Vegetables'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </Grid>
  );
};

export default WhyFoodie;
