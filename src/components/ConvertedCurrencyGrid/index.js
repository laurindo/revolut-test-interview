import React from 'react';
import PropTypes from 'prop-types';
import SimpleGridList from '../SimpleGridList';
import Loading from '../Loading';

import './style.css';

const ConvertedCurrencyGrid = ({ props, currencyConversion, valuesTitle }) => (
  <div className='container'>
    <div className="row">
      {
        (props.loading) ?
          <Loading /> :
          <SimpleGridList
            {...props}
            values={ props.convertedValues }
            valuesTitle={ valuesTitle }
            valuesRows={ currencyConversion() }
          />
      }
    </div>
  </div>
);

ConvertedCurrencyGrid.propTypes = {
  props: PropTypes.object.isRequired,
  currencyConversion: PropTypes.func.isRequired,
  valuesTitle: PropTypes.array.isRequired,
};

export default ConvertedCurrencyGrid;
