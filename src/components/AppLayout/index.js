import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import BackgroundOverlay from 'prosearch-components/BackgroundOverlay';

const AppLayout = (props) => {
  return (
    <div className={classNames('app-content', props.appClass)}>
      <BackgroundOverlay className={props.appClass} />
      {props.children}
    </div>
  );
};

AppLayout.propTypes = {
  appClass: PropTypes.string.isRequired,
};

export default AppLayout;
