import React from 'react';
import PropTypes from 'prop-types';
import './quotation.css'

const Quotation = ({ symbol, currency, value }) => (
  <small className="quotation-text"> { symbol } { value } { currency }</small>
);

Quotation.propTypes = {
  symbol: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Quotation;
