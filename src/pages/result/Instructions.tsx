import PropTypes from "prop-types";

import { Typography } from "@material-ui/core";

import { I_API } from "types/I_API";

const Instructions = ({ strInstructions }: {strInstructions: any}) => {
  return (
    <div>
      <Typography color="primary" variant="h5" align="center">
        -- How to cook --
      </Typography>
      {strInstructions.split(".").map((tag: string, i: number) => (
        <ul key={i}>
          <li>{tag}</li>
        </ul>
      ))}
    </div>
  );
};

Instructions.propTypes = {};

export default Instructions;
