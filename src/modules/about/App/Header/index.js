import PropTypes from 'prop-types';
import React from 'react';

import AppHeader from 'prosearch-components/AppHeader';

const Header = (props) => {
  return <AppHeader className={props.className} title='About' />;
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
