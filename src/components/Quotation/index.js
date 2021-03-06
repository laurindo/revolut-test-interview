import React from 'react';
import PropTypes from 'prop-types';
import './quotation.css'

const Quotation = ({ symbol, currency, value = '0.00' }) => (
  <small className="quotation-text"> { symbol } { value } { currency }</small>
);

Quotation.propTypes = {
  symbol: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Quotation;
