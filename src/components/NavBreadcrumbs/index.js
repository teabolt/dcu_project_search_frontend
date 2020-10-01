import classNames from 'classnames';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './NavBreadcrumbs.scss';

const NavBreadcrumbs = (props) => {
  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      className={classNames('nav-breadcrumbs', props.className)}
      data-testid={props.testId}
    >
      <Typography variant='body1'>
        <Link to='/'>Home</Link>
      </Typography>
      <Typography variant='body1'>{props.app}</Typography>
    </Breadcrumbs>
  );
};

NavBreadcrumbs.propTypes = {
  app: PropTypes.string.isRequired,

  className: PropTypes.string,
  testId: PropTypes.string,
};

export default NavBreadcrumbs;
