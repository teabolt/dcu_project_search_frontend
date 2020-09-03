import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'modules/main/components/Navbar';
import BackgroundOverlay from 'prosearch-components/BackgroundOverlay';

const AppLayout = (props) => {
  return (
    <div className={classNames('app-content-container', props.appClass)}>
      <BackgroundOverlay className={props.appClass} />
      <Navbar />
      <div className='app-content'>{props.children}</div>
    </div>
  );
};

AppLayout.propTypes = {
  appClass: PropTypes.string.isRequired,
};

export default AppLayout;
