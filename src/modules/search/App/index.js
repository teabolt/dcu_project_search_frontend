import classNames from 'classnames';
import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { searchProjects } from 'prosearch-api/search';
import AppLayout from 'prosearch-components/AppLayout';
import LoadingSpinner from 'prosearch-components/LoadingSpinner';
import SearchBox from 'prosearch-components/SearchBox';
import SearchResultSummary from 'prosearch-components/SearchResultSummary';
import withQueryParam from 'prosearch-components/withQueryParam';
import {
  SEARCH_DEFAULT_PAGINATION_SIZE,
  SNACKBAR_DEFAULT_ERROR_DURATION_MS,
  SNACKBAR_DEFAULT_ERROR_ORIGIN,
} from 'prosearch-constants';
import SearchResults from 'prosearch-views/SearchResults';

import Header from './Header';

import { DEBOUNCE_WAIT_MS, PLACEHOLDER_MSG } from './constants';
import { isValidQuery, validateResults } from './utils';

import './App.scss';

const App = (props) => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const loadResults = async (page) => {
    try {
      const fromOffset = page * SEARCH_DEFAULT_PAGINATION_SIZE;
      const res = await searchProjects(props.query, fromOffset);
      return res;
    } catch (err) {
      setError(String(err));
      return null;
    }
  };

  useEffect(() => {
    if (isValidQuery(props.query)) {
      (async () => {
        const results = await loadResults(0);
        setSearchResults(results);
      })();
    }
  }, [props.query]);

  const onChangeSearch = _.debounce((newQuery) => {
    props.setQuery(newQuery);
  }, DEBOUNCE_WAIT_MS);

  const onSnackbarClose = (_event, reason) => {
    if (reason === 'timeout') {
      setError(null);
    }
  };

  return (
    <AppLayout appClass={classNames('search-app', 'home-app')} appName='Search'>
      <Header />
      <SearchBox
        placeholder={PLACEHOLDER_MSG}
        value={props.query}
        onChange={onChangeSearch}
      />
      {isValidQuery(props.query) && (
        <>
          {validateResults(searchResults) ? (
            <>
              <SearchResultSummary
                query={props.query}
                searchResults={searchResults}
              />
              <SearchResults
                searchResults={searchResults}
                onLoadResults={loadResults}
                onSetSearchResults={setSearchResults}
              />
            </>
          ) : (
            <LoadingSpinner />
          )}
        </>
      )}
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

App.propTypes = {
  query: PropTypes.string.isRequired,

  setQuery: PropTypes.func.isRequired,
};

export default withQueryParam(App, 'query', 'setQuery', '');
