import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { I_API } from 'types/I_API';
import { CustomPagination } from 'components';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import axios from 'axios';
import MainLayout from 'layouts/MainLayout';
import useStyles from './styled/index';

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const meal = context.params.meals;
  const res = await axios.get(`${process.env.THEMEALDB}/search.php?s=${meal}`);

  return {
    props: { results: res.data.meals },
  };
};

const SearchResults = ({ results }: { results: {} | any }) => {
  const styles = useStyles();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { meals } = router.query;

  const getIdMeal = (idMeal: { idMeal: any }): void => {
    router.push(`/result/${idMeal}`);
  };

  // get the current page
  const onPageChange = ({
    selected: selectedPage,
  }: {
    selected: number;
    selectedPage: number;
  }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  let pageCount = results?.length ? results?.length / 6 : 0;
  return (
    <MainLayout>
      <Head>
        <title>Foodie | {meals} </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Grid className={styles.root}>
        <Grid className={styles.cardContainer}>
          {results?.length ? (
            <>
              <Typography align='center'>RECIPES FOUND FOR {meals}</Typography>
              {results
                .slice(offset, offset + PER_PAGE)
                .map(
                  ({
                    idMeal,
                    strMealThumb,
                    strCategory,
                    strMeal,
                  }: I_API.I_Results) => (
                    <Card key={idMeal} raised className={styles.cardStyle}>
                      <CardContent>
                        <CardMedia
                          className={styles.imageStyle}
                          component='img'
                          title='Slice'
                          image={strMealThumb}
                        />
                        <Typography variant='h6'>{strCategory}</Typography>
                        <Typography variant='h6'>{strMeal}</Typography>
                        <Typography
                          color='primary'
                          onClick={() => getIdMeal(idMeal)}
                        >
                          View More
                        </Typography>
                      </CardContent>
                    </Card>
                  )
                )}
              <Grid container justify='center' alignItems='center'>
                <CustomPagination
                  pageCount={pageCount}
                  onPageChange={onPageChange}
                />
              </Grid>
            </>
          ) : (
            <Typography align='center' variant='h6'>
              Recipe Not Found
            </Typography>
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
