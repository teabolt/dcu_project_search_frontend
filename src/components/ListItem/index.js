import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';

import FallbackPlaceholder from 'prosearch-components/FallbackPlaceholder';

const ListItem = (props) => {
  return (
    <div className={classNames('list-item', props.className)}>
      <div className='list-item-label'>
        <Typography variant='subtitle1'>{props.label}</Typography>
      </div>
      <div className='label-value-pair-value'>
        <Typography variant='body1'>
          <FallbackPlaceholder node={props.value} />
        </Typography>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  label: PropTypes.node.isRequired,

  className: PropTypes.string,
  value: PropTypes.node,
};

export default ListItem;
