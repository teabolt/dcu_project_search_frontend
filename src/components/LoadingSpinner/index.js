import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = (props) => {
  return <CircularProgress key={props.key} />;
};

LoadingSpinner.propTypes = {
  key: PropTypes.string,
};

export default LoadingSpinner;
