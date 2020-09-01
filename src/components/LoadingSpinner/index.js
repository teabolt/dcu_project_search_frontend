import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return <CircularProgress color='inherit' className='loading-spinner' />;
};

export default LoadingSpinner;
