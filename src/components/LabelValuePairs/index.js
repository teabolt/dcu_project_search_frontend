import className from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const LabelValuePairs = (props) => {
  return (
    <div className={className('label-value-pairs', props.className)}>
      {props.pairs.map(({ pairClassName, label, value }) => {
        return (
          <div className={className('label-value-pair', pairClassName)}>
            <div className='label-value-pair-label'>{label}</div>
            <div className='label-value-pair-value'>{value}</div>
          </div>
        );
      })}
    </div>
  );
};

LabelValuePairs.propTypes = {
  pairs: PropTypes.arrayOf({
    label: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
    // eslint-disable-next-line sort-keys
    pairClassName: PropTypes.string,
  }).isRequired,

  // eslint-disable-next-line sort-keys
  className: PropTypes.string,
};

export default LabelValuePairs;
