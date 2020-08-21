import _ from 'lodash';
import React, { useState } from 'react';

import Search from 'prosearch-components/Search';
import SearchResults from 'prosearch-views/SearchResults';

import './App.scss';

const PLACEHOLDER_MSG =
  'Search for a project, i.e. cloud, supervisor jane, ...';

const DEBOUNCE_WAIT_MS = 200;

const App = () => {
  const [query, setQuery] = useState('');

  const onChange = _.debounce((newQuery) => {
    setQuery(newQuery);
  }, DEBOUNCE_WAIT_MS);

  return (
    <div className='search-app'>
      <Search placeholder={PLACEHOLDER_MSG} value={query} onChange={onChange} />
      {query && <SearchResults query={query} />}
    </div>
  );
};

export default App;
