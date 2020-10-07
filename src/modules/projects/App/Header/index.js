import PropTypes from 'prop-types';
import React from 'react';

import AppHeader from 'prosearch-components/AppHeader';
import * as ProsearchPropTypes from 'prosearch-proptypes';

const Header = (props) => {
  return <AppHeader className={props.className} title={props.project.title} />;
};

Header.propTypes = {
  project: ProsearchPropTypes.Project.isRequired,

  className: PropTypes.string,
};

export default Header;
