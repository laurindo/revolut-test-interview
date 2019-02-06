import React from 'react';
import PropTypes from 'prop-types';

const CurrencyList = ({ convertedValues }) => (
  <ul className='list'>
    {
      convertedValues.map((currency, index) => {
        return (
          <li key={index}>{ currency.currency } - { currency.value }</li>
        );
      })
    }
  </ul>
);

CurrencyList.propTypes = {
  convertedValues: PropTypes.array.isRequired,
};

export default CurrencyList;
