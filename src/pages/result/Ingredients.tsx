import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { I_API } from "types/I_API";

const Ingredients = ({ data }: I_API.I_Data) => {
  return (
    <Grid container direction="row" justify="center">
      <Grid item sm={4}>
        <ul>
          <li>{data?.strIngredient1}</li>
          <li>{data?.strIngredient2}</li>
          <li>{data?.strIngredient3}</li>
          <li>{data?.strIngredient4}</li>
          <li>{data?.strIngredient5}</li>
        </ul>
      </Grid>
      <Grid item sm={4}>
        <ul>
          <li>{data?.strIngredient6}</li>
          <li>{data?.strIngredient7}</li>
          <li>{data?.strIngredient8}</li>
          <li>{data?.strIngredient9}</li>
          <li>{data?.strIngredient10}</li>
        </ul>
      </Grid>
    </Grid>
  );
};

Ingredients.propTypes = {};

export default Ingredients;
