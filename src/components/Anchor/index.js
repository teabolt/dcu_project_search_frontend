import React from 'react';

// Safe anchor (link) component
const Anchor = (props) => {
  return (
    <a rel='noreferrer noopener' {...props}>
      {props.children}
    </a>
  );
};

export default Anchor;
