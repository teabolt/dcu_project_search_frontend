import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [currentValue, setCurrentValue] = useState(props.value);

  const onChangeValue = (event) => {
    const val = event.target.value;
    // Keep track of current value in real time internally
    // allowing onChange to update in its own time.
    setCurrentValue(val);
    props.onChange(val);
  };

  return (
    <div className='search-box-container'>
      <SearchIcon />
      <Input
        placeholder={props.placeholder}
        value={currentValue}
        onChange={onChangeValue}
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,

  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Search;
