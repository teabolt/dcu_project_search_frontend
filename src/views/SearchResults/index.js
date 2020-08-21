import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { searchProjects } from 'prosearch-api/search';
import Project from 'prosearch-components/Project';
import SearchResultSummary from 'prosearch-components/SearchResultSummary';

import './SearchResults.scss';

const SearchResults = (props) => {
  const handleObserver = (entities) => {
    if (results && results.results.length === results.total) {
      observer.disconnect();
    }
    if (_.some(entities, (entity) => entity.isIntersecting)) {
      loadResults();
    }
  };

  const scrollRef = useRef(null);

  const [results, setResults] = useState(null);
  const [fromOffset, setFromOffset] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [observer, setObserver] = useState(
    new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0%',
      threshold: 1,
    })
  );

  const loadResults = async () => {
    setLoading(true);
    try {
      const searchResults = await searchProjects(props.query, fromOffset);
      if (results) {
        setResults({
          results: _.concat(results.results, searchResults.results),
          total: results.total,
        });
      } else {
        setResults(searchResults);
      }
      setFromOffset(searchResults.results.length);
    } catch (err) {
      // TODO: error handling
    }
    setLoading(false);
  };

  useEffect(() => {
    // Initial load
    if (!scrollRef.current) {
      loadResults();
    }

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
  }, [props.query, scrollRef.current]);

  return (
    <div className='search-results-container'>
      {results && (
        <>
          <SearchResultSummary query={props.query} results={results} />
          <div className='search-results'>
            {!results.results ? (
              <span>No projects found</span>
            ) : (
              <>
                {results.results.map((result) => (
                  <Project project={result} />
                ))}
                <div ref={scrollRef}></div>
              </>
            )}
          </div>
        </>
      )}
      {loading && <CircularProgress />}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string,
};

export default SearchResults;
