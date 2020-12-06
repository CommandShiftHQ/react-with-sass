import React from 'react';
import PropTypes from 'prop-types';

const Input = ({field}) => {
  const {
    id, label, onChangeHandler, placeholder, type
  } = field;
  return (
    <div className="input">
      {!!label && <label htmlFor={id}>{label}</label>}
      <input 
        type={type}
        id={id}
        name={id}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
  }),
}

Input.defaultProps = {
  placeholder: '',
  label: ''
}
