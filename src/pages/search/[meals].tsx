import axios from 'axios';
import MainLayout from 'layouts/MainLayout';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next';
import useStyles from './styled/index';
import { I_ServerSideTypes } from 'types/I_ServerSideTypes';
import { CustomPagination } from 'components';
import { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);

  const { meals } = router.query;

  const getIdMeal = (param: object): void => {
    router.push(`/result/${param.idMeal}`);
  };

  // get the current page
  const onPageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  let pageCount = mealResults?.meals.length / 6;
  return (
    <MainLayout>
      <Grid className={styles.root}>
        <Typography align='center'>RECIPES FOUND FOR {meals}</Typography>
        <Grid className={styles.cardContainer}>
          {mealResults?.meals.length &&
            mealResults?.meals
              .slice(offset, offset + PER_PAGE)
              .map((info, i) => (
                <Card
                  onClick={() => console.log(pageCount)}
                  raised
                  key={info.idMeal}
                  className={styles.cardStyle}
                >
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

        <CustomPagination pageCount={pageCount} onPageChange={onPageChange} />
      </Grid>
    </MainLayout>
  );
};

SearchResults.propTypes = {};

export default SearchResults;
