import { cloneElement } from 'react';
import { useScrollTrigger } from '@material-ui/core';
import { I_Navigation } from 'types/I_Navigation';
import PropTypes from 'prop-types';

const ElevatedScroll = ({
  children,
  window,
}: I_Navigation.I_ElevatedScroll) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevatedScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ElevatedScroll;
