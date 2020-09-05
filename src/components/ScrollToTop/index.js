import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Fab from '@material-ui/core/Fab';
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
    <Fab
      aria-label='scroll back to top'
      className={classNames('scroll-to-top', {
        'scroll-to-top-absolute': props.absolute,
      })}
      color='secondary'
      onClick={scrollTop}
      size='small'
    >
      <ArrowUpwardIcon />
    </Fab>
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
