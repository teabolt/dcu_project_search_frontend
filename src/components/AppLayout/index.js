import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'modules/main/components/Navbar';
import BackgroundOverlay from 'prosearch-components/BackgroundOverlay';
import ScrollToTop from 'prosearch-components/ScrollToTop';

const AppLayout = (props) => {
  return (
    <div className={classNames('app-content-container', props.appClass)}>
      <BackgroundOverlay className={props.appClass} />
      <Grid container direction='row' justify='center'>
        <Grid item xs={11} sm={11} md={10} lg={8} xl={6}>
          <Navbar />
          <div className='app-content'>{props.children}</div>
        </Grid>
      </Grid>
      <ScrollToTop />
    </div>
  );
};

AppLayout.propTypes = {
  appClass: PropTypes.string.isRequired,
};

export default AppLayout;
