import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {onClickHandler, text, variant} = props;
  const className =  variant === '' 
    ? 'button--default'
    : `button--${variant}`;

  return (
    <button className={className} onClick={onClickHandler} >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string
}

Button.defaultProps = {
  variant: ''
}
