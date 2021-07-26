import axios from "axios";
import MainLayout from "layouts/MainLayout";
import { Grid, Link, Tabs, Tab } from "@material-ui/core";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { TabPanel } from "components";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import useStyles from "./styled";
import Tags from "./Tags";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import { I_API } from "types/I_API";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const id = context.params.idMeal;
  const res = await axios.post(`${process.env.THEMEALDB}/lookup.php?i=${id}`);
  return {
    props: { result: res.data.meals },
  };
};
const MealResult = ({ result }: { result: {} | any }) => {
  const styles = useStyles();
  const router = useRouter();

  const idMeal = router.query.idMeal;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newValue: any) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <MainLayout>
      <title>Foody | {idMeal}</title>
      <meta name="description" content="Result for the meal" />
      <link rel="icon" href="/favicon.ico" />
      <Grid className={styles.root}>
        <BreadcrumbsComponent />

        {result.map((data: I_API.I_Data, i: number) => (
          <div key={i}>
            <div className={styles.youtubeContainer}>
              <ReactPlayer
                height="100%"
                width="100%"
                controls
                url={data.strYoutube}
              />
            </div>
            <hr />
            <Tags data={data} />
            <hr />
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Instructions" />
              <Tab label="Ingredients" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Instructions strInstructions={data.strInstructions} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Ingredients data={data} />
            </TabPanel>
            <hr />
            <Link color="primary" href={data.strSource}>
              Source of the recipe
            </Link>
          </div>
        ))}
      </Grid>
    </MainLayout>
  );
};

MealResult.propTypes = {};

export default MealResult;
