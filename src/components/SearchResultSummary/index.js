import React from 'react';
import PropTypes from 'prop-types';

import './SearchResultSummary.scss';

const SearchResultSummary = (props) => {
  return (
    <div className='search-result-summary-container'>
      {props.searchResults.total} projects found for "{props.query}"
    </div>
  );
};

SearchResultSummary.propTypes = {
  query: PropTypes.string,
  searchResults: PropTypes.object, // FIXME
};

export default SearchResultSummary;
