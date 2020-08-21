import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ScrollToTop.scss';

const PAGE_Y_OFFSET_LIMIT = 400;

const ScrollToTop = (props) => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > PAGE_Y_OFFSET_LIMIT) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= PAGE_Y_OFFSET_LIMIT) {
      setShowScroll(false);
    }
  };
  if (props.autoHide) {
    window.addEventListener('scroll', checkScrollTop);
  }

  let node = (
    <IconButton
      className={classNames('scroll-to-top', {
        'scroll-to-top-absolute': props.absolute,
      })}
      onClick={scrollTop}
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
  if (props.autoHide && !showScroll) {
    node = null;
  }
  return <div className='scroll-to-top-container'>{node}</div>;
};

ScrollToTop.propTypes = {
  absolute: PropTypes.bool,
  autoHide: PropTypes.bool,
};

ScrollToTop.defaultProps = {
  absolute: true,
  autoHide: true,
};

export default ScrollToTop;
