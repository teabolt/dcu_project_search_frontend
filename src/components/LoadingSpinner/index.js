import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import PropTypes from 'prop-types';

import './LoadingSpinner.scss';

const LoadingSpinner = (props) => {
  return (
    <CircularProgress
      color='inherit'
      className='loading-spinner'
      key={props.key}
    />
  );
};

LoadingSpinner.propTypes = {
  key: PropTypes.string,
};

export default LoadingSpinner;
