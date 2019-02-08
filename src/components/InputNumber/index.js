import React, { Component } from "react";
import './style.css';

const InputNumber = ({ value, onChange }) => (
  <input
    className="input-number"
    type="text"
    value={value}
    onChange={(evt) => onChange(evt.target.value)} />
);

export default InputNumber;
