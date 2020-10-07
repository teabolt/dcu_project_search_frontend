import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

import Navbar from 'modules/main/components/Navbar';
import NavBreadcrumbs from 'prosearch-components/NavBreadcrumbs';
import BackgroundOverlay from 'prosearch-components/BackgroundOverlay';
import ScrollToTop from 'prosearch-components/ScrollToTop';

const AppLayout = (props) => {
  return (
    <div className={classNames('app-content-container', props.appClass)}>
      <BackgroundOverlay className={props.appClass} />
      <Grid container direction='row' justify='center'>
        <Grid item xs={11} sm={11} md={10} lg={8} xl={6}>
          <Navbar />
          {props.showBreadcrumbs && (
            <NavBreadcrumbs
              app={props.appName}
              className='app-breadcrumbs'
              testId='app-breadcrumbs'
            />
          )}
          <div className='app-content'>{props.children}</div>
        </Grid>
      </Grid>
      <ScrollToTop />
    </div>
  );
};

AppLayout.propTypes = {
  appClass: PropTypes.string.isRequired,
  appName: PropTypes.string.isRequired,

  showBreadcrumbs: PropTypes.bool,
};

AppLayout.defaultProps = {
  showBreadcrumbs: false,
};

export default AppLayout;
