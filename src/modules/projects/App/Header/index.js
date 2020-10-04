import React from 'react';

import AppHeader from 'prosearch-components/AppHeader';
import * as ProsearchPropTypes from 'prosearch-proptypes';

const Header = (props) => {
  return <AppHeader title={props.project.title} />;
};

Header.propTypes = {
  project: ProsearchPropTypes.Project.isRequired,
};

export default Header;
