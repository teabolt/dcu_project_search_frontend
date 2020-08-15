import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { searchProjects } from 'prosearch-api/search';

const SearchResults = (props) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    (async () => {
      setResults(await searchProjects(props.query));
    })();
  }, [props.query]);

  if (!results) {
    return <></>;
  }

  return (
    <div>
      <span>
        {results.total} projects found for {props.query}
      </span>
      {results.results.map((result) => (
        <div>{JSON.stringify(result)}</div>
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string,
};

export default SearchResults;
