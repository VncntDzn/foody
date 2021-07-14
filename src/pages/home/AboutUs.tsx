import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import {
  Grid,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import Slice from 'assets/home/Slice.jpg';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '3rem',
      textAlign: 'center',
    },
    image: {
      border: '3px solid red',
      position: 'absolute',
      zIndex: -1,
      height: '80%',
      width: '100%',
      overflow: 'hidden',
    },
    cardContainer: {
      textAlign: 'justify',
      borderRadius: '10px',
      marginTop: '1rem',
    },
  })
);

const AboutUs = () => {
  const styles = useStyles();
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography variant='h5'> -- ABOUT US -- </Typography>
        <Typography color='primary'>MAKE YOUR FOOD EASILY</Typography>
        <Card className={styles.cardContainer} raised>
          <Image src={Slice} alt='Vincent' layout='responsive' quality={100} />
          <CardContent>
            <p>
              Foody was built to help every person in the world that struggles
              to find their meal ingredients.
            </p>
            <p>
              Here in Foody, we gathered every possible meal ingredients around
              the world and all you have to do is to search them.
            </p>
            <p>
              Eat clean food, feel great about cooking and eat delicious foods
              at your own home.
            </p>
          </CardContent>
        </Card>
      </Grid>
    </MainLayout>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
