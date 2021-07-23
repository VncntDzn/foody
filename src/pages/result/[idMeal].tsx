import axios from 'axios';
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
  CardMedia,
  Icon,
  Link,
  IconButton,
  Breadcrumbs,
} from '@material-ui/core';
import ClassIcon from '@material-ui/icons/Class';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HomeIcon from '@material-ui/icons/Home';

interface I_Result {
  mealResults: object;
  meals: string;
  params: object;
  context: object;
  meal: string;
  info: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '3px solid red',
      paddingTop: '3rem',
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
    tagsContainer: {
      border: '3px solid green',
    },
    youtubeContainer: {
      border: '3px solid blue',
      alignSelf: 'center',
      height: '50vh',
      width: '90vw',

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

export const getServerSideProps = async (context: I_Result) => {
  const id = context.params.idMeal;
  const res = await axios.post(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  return {
    props: { result: res.data },
  };
};
const SearchResults = ({ result }: I_Result) => {
  const styles = useStyles();
  const router = useRouter();

  const idMeal = router.query.idMeal;

  return (
    <MainLayout>
      <Grid className={styles.root}>
        {result.meals.map((data, index) => (
          <div key={data.idMeal} style={{ margin: '1rem' }}>
            <Breadcrumbs aria-label='breadcrumb'>
              <Link color='inherit' href='/'>
                <HomeIcon />
              </Link>
              <Link color='inherit' href='/getting-started/installation/'>
                Core
              </Link>
              <Typography color='textPrimary'>Breadcrumb</Typography>
            </Breadcrumbs>

            <Typography align='center' className={styles.mealName}>
              {data.strMeal}
            </Typography>
            <Typography color='primary' align='center' variant='h6'>
              {data.strArea}
            </Typography>
            <div className={styles.youtubeContainer}>
              <ReactPlayer
                height='100%'
                width='100%'
                controls
                url={data.strYoutube}
              />
            </div>
            <hr />

            <Grid
              container
              wrap='wrap'
              justify='flex-start'
              className={styles.tagsContainer}
            >
              <Grid
                container
                item
                justify='center'
                alignContent='center'
                alignItems='center'
                xs={3}
                md={2}
                sm={2}
                lg={1}
              >
                <Typography color='primary' align='center'>
                  Tags
                </Typography>
                <Icon color='primary'>
                  <LoyaltyIcon />
                </Icon>
              </Grid>
              {data.strTags.split(',').map((tag, i) => (
                <Typography key={i} variant='subtitle1'>
                  {tag}, &nbsp;
                </Typography>
              ))}
            </Grid>
            <hr />
            <Typography color='primary' variant='h5' align='center'>
              -- How to cook --
            </Typography>
            {data.strInstructions.split('.').map((tag, i) => (
              <ul key={i}>
                <li>{tag}</li>
              </ul>
            ))}
            <hr />
            <Link color='primary' href={data.strSource}>
              Source of the recipe
            </Link>
          </div>
        ))}
      </Grid>
    </MainLayout>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
