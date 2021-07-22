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
} from '@material-ui/core';
import { useState } from 'react';

import { useRouter } from 'next/router';

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
      paddingTop: '7rem',
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
  })
);

export const getServerSideProps = async (context: I_Result) => {
  const id = context.params.idMeal;
  const res = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return {
    props: { mealResults: res.data },
  };
};
const SearchResults = ({ mealResults }: I_Result) => {
  const styles = useStyles();
  const router = useRouter();

  const { meals } = router.query;

  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography>sad</Typography>
      </Grid>
    </MainLayout>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
