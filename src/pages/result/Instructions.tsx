import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
const Instructions = ({ data }) => {
  return (
    <div>
      <Typography color='primary' variant='h5' align='center'>
        -- How to cook --
      </Typography>
      {data?.strInstructions.split('.').map((tag, i) => (
        <ul key={i}>
          <li>{tag}</li>
        </ul>
      ))}
    </div>
  );
};

Instructions.propTypes = {};

export default Instructions;
