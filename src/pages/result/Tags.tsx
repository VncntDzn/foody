import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Grid,
  Link,
  Tabs,
  Tab,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";

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
const Tags = ({ data }: I_API.I_Data) => {
  const styles = useStyles();
  return (
    <Grid container wrap="wrap" justify="flex-start">
      <Grid
        container
        item
        justify="center"
        alignContent="center"
        alignItems="center"
        xs={3}
        md={2}
        sm={2}
        lg={1}
      >
        <Typography color="primary" align="center">
          Tags:
        </Typography>
      </Grid>

      {data?.strTags?.split(",").map((tag: string, i: number) => (
        <Typography key={i} variant="subtitle1">
          {tag}, &nbsp;
        </Typography>
      ))}
    </Grid>
  );
};

Tags.propTypes = {};

export default Tags;
