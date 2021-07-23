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
  Icon,
  Link,
  IconButton,
  Tabs,
  Tab,
} from '@material-ui/core';
import ClassIcon from '@material-ui/icons/Class';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styled';
import { TabPanel } from 'components';
import Tags from './Tags';
import BreadcrumbsComponent from './BreadcrumbsComponent';
import Instructions from './Instructions';
import Ingredients from './Ingredients';
export const getServerSideProps = async (context) => {
  const id = context.params.idMeal;
  const res = await axios.post(`${process.env.THEMEALDB}/lookup.php?i=${id}`);
  return {
    props: { result: res.data },
  };
};
const SearchResults = ({ result }) => {
  const styles = useStyles();
  const router = useRouter();

  const idMeal = router.query.idMeal;
  const [value, setValue] = useState<number>(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Grid className={styles.root}>
        <BreadcrumbsComponent />

        {result.meals.map((data) => (
          <div key={data.idMeal}>
            <div className={styles.youtubeContainer}>
              <ReactPlayer
                height='100%'
                width='100%'
                controls
                url={data.strYoutube}
              />
            </div>
            <hr />
            <Tags data={data} />
            <hr />
            <Tabs value={value} onChange={handleChange}>
              <Tab label='Instructions' />
              <Tab label='Ingredients' />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Instructions data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Ingredients data={data} />
            </TabPanel>
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
