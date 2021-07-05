import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'layouts/MainLayout';
import { Box } from '@material-ui/core';

const LandingPage = () => {
  return (
    <MainLayout>
      <div style={{ marginTop: '5rem' }}>
        <h1>Find your favorite food ingredients at Foody </h1>
        <p>We've got everything for every dish.</p>
      </div>
    </MainLayout>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
