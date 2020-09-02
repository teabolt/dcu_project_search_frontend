import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './BackgroundOverlay.scss';

const BackgroundOverlay = (props) => {
  return (
    <div className={classNames('background-overlay', props.className)}></div>
  );
};

BackgroundOverlay.propTypes = {
  className: PropTypes.string,
};

export default BackgroundOverlay;
