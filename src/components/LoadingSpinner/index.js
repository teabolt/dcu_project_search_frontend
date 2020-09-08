import classNames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import PropTypes from 'prop-types';

import './LoadingSpinner.scss';

const LoadingSpinner = (props) => {
  return (
    <CircularProgress
      color='inherit'
      className={classNames('loading-spinner', props.className)}
    />
  );
};

LoadingSpinner.propTypes = {
  className: PropTypes.string,
};

export default LoadingSpinner;
