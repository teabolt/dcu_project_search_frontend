import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';

import { searchProjects } from 'prosearch-api/search';
import Project from 'prosearch-components/Project';
import SearchResultSummary from 'prosearch-components/SearchResultSummary';
import { SEARCH_DEFAULT_PAGINATION_SIZE } from 'prosearch-constants';

import './SearchResults.scss';

const SearchResults = (props) => {
  const [results, setResults] = useState(null);

  const loadResults = async (page) => {
    try {
      const fromOffset = page * SEARCH_DEFAULT_PAGINATION_SIZE;
      const searchResults = await searchProjects(props.query, fromOffset);
      if (fromOffset === 0) {
        setResults(searchResults);
      } else {
        setResults({
          results: _.concat(results.results, searchResults.results),
          total: results.total,
        });
      }
    } catch (err) {
      // TODO: error handling
    }
  };

  useEffect(() => {
    loadResults(0);
  }, [props.query]);

  const hasMoreResults = () => {
    if (!results) {
      return true;
    }
    return _.size(results.results) < results.total;
  };

  return (
    <div className='search-results-container'>
      <>
        {results && (
          <SearchResultSummary query={props.query} results={results} />
        )}
        <InfiniteScroll
          className='search-results'
          pageStart={0}
          initialLoad={false} // We do an initial load ourselves above.
          loadMore={loadResults}
          hasMore={hasMoreResults()}
          loader={<CircularProgress key='search-results-loading' />}
        >
          {results ? (
            results.results.map((result, index) => (
              // FIXME: key error
              <Project key={index} project={result} />
            ))
          ) : (
            <span key='search-results-none'>No projects found</span>
          )}
        </InfiniteScroll>
      </>
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string,
};

export default SearchResults;
