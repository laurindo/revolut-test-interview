import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './style.css';

const Currency = ({ options, changeCurrency, selectedCurrency }) => (
  <Select
    className="currency-select"
    value={ selectedCurrency }
    onChange={ (selected) => changeCurrency(selected) }
    options={ options }
    />
);

Currency.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
