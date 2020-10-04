import classNames from 'classnames';
import _ from 'lodash';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import * as ProsearchPropTypes from 'prosearch-proptypes';
import { getProjectLink } from 'prosearch-utils';

const SNACKBAR_ANCHOR = {
  horizontal: 'left',
  vertical: 'bottom',
};
const SNACKBAR_AUTOHIDE_DURATION_MS = 1000;
const SNACKBAR_COPIED_MSG = 'Copied!';

const Link = (props) => {
  const [copied, setCopied] = useState(false);

  const link = getProjectLink(props.project);

  const onClick = () => {
    if (!_.get(navigator, ['clipboard'])) {
      // eslint-disable-next-line no-console
      console.error('Native navigator clipboard API is not available');
      return;
    }
    navigator.clipboard.writeText(link);
    setCopied(true);
  };

  const onSnackbarClose = (_event, reason) => {
    if (reason === 'timeout') {
      setCopied(false);
    }
  };

  return (
    <>
      <IconButton
        className={classNames(
          'project-control project-link-control',
          props.className
        )}
        edge='start'
        onClick={onClick}
      >
        <LinkIcon {...props.iconProps} />
      </IconButton>
      <Snackbar
        anchorOrigin={SNACKBAR_ANCHOR}
        autoHideDuration={SNACKBAR_AUTOHIDE_DURATION_MS}
        message={SNACKBAR_COPIED_MSG}
        open={copied}
        onClose={onSnackbarClose}
      />
    </>
  );
};

Link.propTypes = {
  project: ProsearchPropTypes.Project.isRequired,

  className: PropTypes.string,
  iconProps: PropTypes.object,
};

export default Link;
