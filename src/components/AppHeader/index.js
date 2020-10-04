import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const AppHeader = (props) => {
  return (
    <div className={classNames('app-header', props.className)}>
      <Typography variant='h2'>{props.title}</Typography>
      {props.description && (
        <Typography variant='h6'>{props.description}</Typography>
      )}
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,

  className: PropTypes.string,
  description: PropTypes.string,
};

export default AppHeader;
