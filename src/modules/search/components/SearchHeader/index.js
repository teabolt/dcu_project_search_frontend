import Typography from '@material-ui/core/Typography';
import React from 'react';

const SearchHeader = () => {
  return (
    <div className='search-header'>
      <Typography variant='h2'>Project Search</Typography>
      <Typography variant='h6'>
        Browse our extracted library of student final year projects
      </Typography>
    </div>
  );
};

export default SearchHeader;
