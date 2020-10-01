import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import PropTypes from 'prop-types';

const Clear = (props) => {
  return (
    <IconButton
      className='clear-button'
      data-testid={props.testId}
      onClick={props.onClick}
    >
      <ClearIcon />
    </IconButton>
  );
};

Clear.propTypes = {
  onClick: PropTypes.func.isRequired,

  testId: PropTypes.string,
};

export default Clear;
