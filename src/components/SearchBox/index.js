import Input from '@material-ui/core/Input';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBox.scss';

const SearchBox = (props) => {
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
      <Input
        disableUnderline={true}
        placeholder={props.placeholder}
        value={currentValue}
        onChange={onChangeValue}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,

  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default SearchBox;
