import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './style.css';

const Currency = ({ options, changeCurrency, selectedCurrency, disabled = false }) => (
  <Select
    className="currency-select"
    isDisabled={disabled}
    value={ selectedCurrency }
    onChange={ (selected) => changeCurrency(selected) }
    options={ options }
    />
);

Currency.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Currency;
