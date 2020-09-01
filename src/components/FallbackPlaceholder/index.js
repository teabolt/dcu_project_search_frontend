import React from 'react';
import PropTypes from 'prop-types';

const FallbackPlaceholder = (props) => {
  if (props.node) {
    return <>{props.node}</>;
  }
  return '—';
};

FallbackPlaceholder.propTypes = {
  node: PropTypes.node,
};

export default FallbackPlaceholder;
