import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {"is-invalid":error})}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
    
  );
};
TextInputGroup.propTypes={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    placeholder:PropTypes.string.isRequired,
    error:PropTypes.string
};
TextInputGroup.defaultProps={
    type:'text'
};
export default TextInputGroup;
