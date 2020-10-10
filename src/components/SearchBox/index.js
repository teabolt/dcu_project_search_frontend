import Input from '@material-ui/core/Input';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Clear from './Clear';

import './SearchBox.scss';

const SearchBox = (props) => {
  const [currentValue, setCurrentValue] = useState(props.value);

  useEffect(() => {
    setCurrentValue(props.value);
  }, [props]);

  const onUpdate = (value) => {
    // Keep track of current value in real time internally
    // allowing onChange to update in its own time.
    setCurrentValue(value);
    props.onChange(value);
  };

  const onChangeEvent = (event) => {
    const val = event.target.value;
    onUpdate(val);
  };

  const onClear = () => {
    onUpdate('');
  };

  return (
    <div className='search-box-container'>
      <Input
        data-testid='search-box'
        disableUnderline={true}
        endAdornment={
          currentValue ? (
            <Clear onClick={onClear} testId='search-box-clear' />
          ) : undefined
        }
        placeholder={props.placeholder}
        value={currentValue}
        onChange={onChangeEvent}
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
