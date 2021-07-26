import axios from "axios";
import MainLayout from "layouts/MainLayout";
import {
  Grid,
  Link,
  Tabs,
  Tab,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { TabPanel } from "components";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Tags from "./Tags"; 
import Instructions from "./Instructions";
import Ingredients from "./Ingredients"; 
import { I_API } from "types/I_API";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: "80vh",
      padding: "1rem",
      paddingTop: "5rem",
      [theme.breakpoints.up("sm")]: {
        paddingTop: "8rem",
        height: "50vh",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "38vh",
      },
    },

    youtubeContainer: {
      alignSelf: "center",
      height: "50vh",
      width: "90vw",
      marginTop: "1rem",

      [theme.breakpoints.up("sm")]: {
        height: "40vh",
        width: "82vw",
      },
      [theme.breakpoints.up("md")]: {
        height: "35vh",
        width: "78vw",
      },
      [theme.breakpoints.up("lg")]: {
        height: "95vh",
        width: "81vw",
      },
    },
    mealName: {
      fontSize: "clamp(1.6rem, 5vw, 2rem)",
      fontWeight: 700,
    },
  })
);
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
      <Grid className={styles.root}>
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
