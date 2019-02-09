import React, { Component } from "react";
import './style.css';

const InputNumber = ({ value, readonly = false, onChange }) => (
  <input
    className="input-number"
    readOnly={readonly}
    type="text"
    value={value}
    onChange={(evt) => onChange(evt.target.value)} />
);

export default InputNumber;
