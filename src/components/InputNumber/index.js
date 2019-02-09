import React from "react";
import PropTypes from 'prop-types';
import './style.css';

const InputNumber = ({ value, readonly = false, onChange }) => (
  <input
    className="input-number"
    readOnly={readonly}
    type="text"
    value={value}
    onChange={(evt) => onChange(evt.target.value)} />
);

InputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  readonly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
