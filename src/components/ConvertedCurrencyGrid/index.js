import React from 'react';
import SimpleGridList from '../SimpleGridList';
import Loading from '../Loading';

import './style.css';

const ConvertedCurrencyGrid = ({ props, currencyConversion }) => (
  <div className='container'>
    <div className="row">
      {
        (props.loading) ?
          <Loading /> :
          <SimpleGridList
            {...props}
            values={ props.convertedValues }
            valuesTitle={ ['Currency', 'Price Unit', 'Balance Total'] }
            valuesRows={ currencyConversion() }
          />
      }
    </div>
  </div>
);

export default ConvertedCurrencyGrid;
