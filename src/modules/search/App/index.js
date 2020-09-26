import _ from 'lodash';
import Snackbar from '@material-ui/core/Snackbar';
import React, { useEffect, useState } from 'react';

import { searchProjects } from 'prosearch-api/search';
import AppLayout from 'prosearch-components/AppLayout';
import LoadingSpinner from 'prosearch-components/LoadingSpinner';
import SearchBox from 'prosearch-components/SearchBox';
import SearchResultSummary from 'prosearch-components/SearchResultSummary';
import { SEARCH_DEFAULT_PAGINATION_SIZE } from 'prosearch-constants';
import SearchResults from 'prosearch-views/SearchResults';

import SearchHeader from 'modules/search/components/SearchHeader';

import { isValidQuery, validateResults } from './utils';

import './App.scss';

const PLACEHOLDER_MSG = 'Search for a project, i.e. machine learning, 2020, david sinclair';

const DEBOUNCE_WAIT_MS = 300;

const App = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const loadResults = async (page) => {
    try {
      const fromOffset = page * SEARCH_DEFAULT_PAGINATION_SIZE;
      const res = await searchProjects(query, fromOffset);
      return res;
    } catch (err) {
      setError(String(err));
      return null;
    }
  };

  useEffect(() => {
    if (isValidQuery(query)) {
      (async () => {
        const results = await loadResults(0);
        setSearchResults(results);
      })();
    }
  }, [query]);

  const onChangeSearch = _.debounce((newQuery) => {
    setQuery(newQuery);
  }, DEBOUNCE_WAIT_MS);

  const onSnackbarClose = (_event, reason) => {
    if (reason === 'timeout') {
      setError(null);
    }
  };

  return (
    <AppLayout appClass='search-app'>
      <SearchHeader />
      <SearchBox
        placeholder={PLACEHOLDER_MSG}
        value={query}
        onChange={onChangeSearch}
      />
      {isValidQuery(query) && (
        <>
          {validateResults(searchResults) ? (
            <>
              <SearchResultSummary
                query={query}
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
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        autoHideDuration={6000}
        message={error}
        open={Boolean(error)}
        onClose={onSnackbarClose}
      />
    </AppLayout>
  );
};

export default App;
