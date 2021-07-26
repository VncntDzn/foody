import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { I_API } from "types/I_API";
import { CustomPagination } from "components";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  createStyles, makeStyles, Theme 
} from "@material-ui/core";
import Head from "next/head";
import axios from "axios";
import MainLayout from "layouts/MainLayout"; 

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const meal = context.params.meals;
  const res = await axios.get(`${process.env.THEMEALDB}/search.php?s=${meal}`);

  return {
    props: { results: res.data.meals },
  };
};


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
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
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
    mealsContainer: {
      paddingLeft: '1rem',
    },
    viewMoreContainer: {
      "&:hover": {
        letterSpacing: '1px',
        cursor: "pointer",
      },
    },
  })
);
const SearchResults = ({ results }: { results: {} | any }) => {
  const styles = useStyles();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { meals } = router.query;

  const getIdMeal = (idMeal: string | number): void => {
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

  let PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  let pageCount = results?.length ? results?.length / 6 : 0;

  return (
    <MainLayout>
      <Head>
        <title>Foodie | {meals} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid className={styles.root}>
        <Typography className={styles.mealsContainer}>
          Recipes found for:{" "}
          <span style={{ fontStyle: "italic", fontWeight: 600 }}>{meals}</span>
        </Typography>
        <Grid className={styles.cardContainer}>
          {results?.length ? (
            <>
              {results
                .slice(offset, offset + PER_PAGE)
                .map(({ idMeal, strMealThumb, strMeal }: I_API.I_Results) => (
                  <Card key={idMeal} raised className={styles.cardStyle}>
                    <CardContent>
                      <CardMedia
                        className={styles.imageStyle}
                        component="img"
                        title="Slice"
                        image={strMealThumb}
                      />

                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: 600, marginTop: "1rem" }}
                      >
                        {strMeal}
                      </Typography>
                      <Typography
                        onClick={() => getIdMeal(idMeal)}
                        color="primary"
                        variant="subtitle2"
                        className={styles.viewMoreContainer}
                      >
                        View More
                      </Typography>
                    </CardContent>
                  </Card>
                ))} 
              <Grid container justify="center" alignItems="center">
                <CustomPagination
                  pageCount={pageCount}
                  onPageChange={onPageChange}
                />
              </Grid>
            </>
          ) : (
            <Typography align="center" variant="h6">
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
