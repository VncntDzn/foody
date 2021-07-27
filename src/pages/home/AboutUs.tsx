import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Hidden,
} from '@material-ui/core';
import MainLayout from 'layouts/MainLayout';
import Image from 'next/image';
import Slice from 'assets/home/Slice.jpg';  

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '3rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
    },
    image: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        height: '25rem',
      },
    },

    cardContainer: {
      textAlign: 'justify',
      borderRadius: '10px',
      marginTop: '1rem',
      [theme.breakpoints.up('sm')]: {
        width: '30rem',
      },
    },
  })
);

const AboutUs = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Hidden mdDown>
          <div style={{ width: '35vw', borderRadius: '30px' }}>
            <Image
              src={Slice}
              alt='Vincent'
              layout='responsive'
              quality={100}
            />
          </div>
        </Hidden>
        <div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant='h4'> -- ABOUT US -- </Typography>
            <Typography color='primary'>MAKE YOUR FOOD EASILY</Typography>
          </div>
          <Card className={styles.cardContainer} raised>
            <Hidden lgUp>
              <CardMedia
                className={styles.image}
                component='img'
                title='Slice'
                image={Slice.src}
              />
            </Hidden>
            <CardContent>
              <p>
                Foodie was built to help every person in the world that struggles
                to find their meal ingredients.
              </p>
              <p>
                Here in Foodie, we gathered every possible meal ingredients
                around the world and all you have to do is to search them.
              </p>
              <p>
                Eat clean food, feel great about cooking and eat delicious foods
                at your own home.
              </p>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </MainLayout>
  );
};

export default AboutUs;
