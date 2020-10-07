import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
