import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProject } from 'prosearch-api';
import AppLayout from 'prosearch-components/AppLayout';
import LoadingSpinner from 'prosearch-components/LoadingSpinner';
import {
  SNACKBAR_DEFAULT_ERROR_ORIGIN,
  SNACKBAR_DEFAULT_ERROR_DURATION_MS,
} from 'prosearch-constants';
import { getIdFromProjectUri } from 'prosearch-utils';

import Card from './Card';
import Header from './Header';

import './App.scss';

const App = () => {
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  const projectUri = useParams().project || '';

  useEffect(() => {
    const projectId = getIdFromProjectUri(projectUri);
    if (!projectId) {
      setNotFound(true);
    }
    (async () => {
      try {
        const res = await getProject(projectId);
        setProject(res);
      } catch (err) {
        if (err.isAxiosError && _.get(err, ['response', 'status']) === 404) {
          setNotFound(true);
        } else {
          setError(String(err));
        }
      }
    })();
  }, [projectUri]);

  const onSnackbarClose = (_event, reason) => {
    if (reason === 'timeout') {
      setError('');
    }
  };

  let content;
  if (notFound) {
    content = <Alert severity='error'>Project not found!</Alert>;
  } else if (!project) {
    content = <LoadingSpinner className='project-spinner' />;
  } else {
    content = (
      <>
        <Header project={project} />
        <Card project={project} />
      </>
    );
  }
  return (
    <AppLayout
      appClass='projects-app'
      appName='Projects'
      showBreadcrumbs={true}
    >
      {content}
      <Snackbar
        anchorOrigin={SNACKBAR_DEFAULT_ERROR_ORIGIN}
        autoHideDuration={SNACKBAR_DEFAULT_ERROR_DURATION_MS}
        message={error}
        open={Boolean(error)}
        onClose={onSnackbarClose}
      />
    </AppLayout>
  );
};

export default App;
