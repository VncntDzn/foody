import axios from 'axios';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import {
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next';
import useStyles from './styled/index';
import { I_ServerSideTypes } from 'types/I_ServerSideTypes';

export const getServerSideProps = async (
  context: I_ServerSideTypes.I_GetServerSideProps
) => {
  const meal = context.params.meals;
  const res = await axios.get(
    `${process.env.THE_MEAL_DB_API}/search.php?s=${meal}`
  );
  return {
    props: { mealResults: res.data },
  };
};

const SearchResults = ({
  mealResults,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const styles = useStyles();
  const router = useRouter();

  const { meals } = router.query;

  const getIdMeal = (param: object): void => {
    router.push(`/result/${param.idMeal}`);
  };

  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography align='center'>RECIPES FOUND FOR {meals}</Typography>
        <Grid className={styles.cardContainer}>
          {mealResults.meals.map((info) => (
            <Card raised key={info.idMeal} className={styles.cardStyle}>
              <CardContent>
                <CardMedia
                  className={styles.imageStyle}
                  component='img'
                  title='Slice'
                  image={info.strMealThumb}
                />
                <Typography variant='h6'>{info.strMeal}</Typography>
                <Typography color='primary' onClick={() => getIdMeal(info)}>
                  View More
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </MainLayout>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
