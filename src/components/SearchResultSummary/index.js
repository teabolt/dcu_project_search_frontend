import React from 'react';
import PropTypes from 'prop-types';

const SearchResultSummary = (props) => {
  return (
    <div className='search-result-summary-container'>
      {props.results.total} projects found for {props.query}
    </div>
  );
};

SearchResultSummary.propTypes = {
  query: PropTypes.string,
  results: PropTypes.object, // FIXME
};

export default SearchResultSummary;
