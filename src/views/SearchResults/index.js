import _ from 'lodash';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';

import LoadingSpinner from 'prosearch-components/LoadingSpinner';
import Project from 'prosearch-components/Project';

import './SearchResults.scss';

const SearchResults = (props) => {
  const hasMore = () => {
    return _.size(props.searchResults.results) < props.searchResults.total;
  };

  const loadMore = async (page) => {
    const results = await props.onLoadResults(page);
    if (results) {
      props.onSetSearchResults({
        results: _.concat(props.searchResults.results, results.results),
        total: results.total,
      });
    }
  };

  return (
    <div className='search-results-container'>
      <InfiniteScroll
        className='search-results'
        pageStart={0}
        initialLoad={false} // We do an initial load by ourselves.
        loadMore={loadMore}
        hasMore={hasMore()}
        loader={<LoadingSpinner key='search-results-loading' />}
      >
        {props.searchResults ? (
          props.searchResults.results.map((result, index) => (
            // FIXME: key error
            <Project key={index} project={result} />
          ))
        ) : (
          <span key='search-results-none'>No projects found</span>
        )}
      </InfiniteScroll>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.object.isRequired, // FIXME

  // eslint-disable-next-line sort-keys
  onLoadResults: PropTypes.func.isRequired,
  onSetSearchResults: PropTypes.func.isRequired,
};

export default SearchResults;
