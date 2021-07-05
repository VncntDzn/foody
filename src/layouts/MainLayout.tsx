import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navigation/Navbar';
import { I_Navigation } from 'types/I_Navigation';

const MainLayout = ({ children }: I_Navigation.I_MainLayout) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
