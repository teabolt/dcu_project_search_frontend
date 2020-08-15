import _ from 'lodash';
import React, { useState } from 'react';

import { searchProjects } from 'prosearch-api/search';
import Search from 'prosearch-components/Search';

const PLACEHOLDER_MSG =
  'Search for a project, i.e. cloud, supervisor jane, ...';

const DEBOUNCE_WAIT_MS = 300;

const App = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onChange = _.debounce((newQuery) => {
    // FIXME: dataflow (should have separate components)
    setQuery(newQuery);
    doSearch(query);
  }, DEBOUNCE_WAIT_MS);

  const doSearch = async (searchQuery) => {
    setSearchResults(await searchProjects(searchQuery));
  };

  return (
    <div className="search-app">
      <Search placeholder={PLACEHOLDER_MSG} value={query} onChange={onChange} />
      <span>{JSON.stringify(searchResults)}</span>
    </div>
  );
};

export default App;
