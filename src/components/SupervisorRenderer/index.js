import React from 'react';
import PropTypes from 'prop-types';

import Anchor from 'prosearch-components/Anchor';

import { isEmail } from 'prosearch-utils';

const SupervisorRenderer = (props) => {
  if (isEmail(props.supervisor)) {
    return (
      <Anchor className='inline-link' href={`mailto:${props.supervisor}`}>
        {props.supervisor}
      </Anchor>
    );
  }

  return props.supervisor;
};

SupervisorRenderer.propTypes = {
  supervisor: PropTypes.string.isRequired,
};

export default SupervisorRenderer;
