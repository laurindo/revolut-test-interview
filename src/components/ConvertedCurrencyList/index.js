import React, { Component } from 'react';
import { calculateBalanceTotal } from '../../utils/BalanceUtils';
import SimpleGridList from '../SimpleGridList';
import Loading from '../Loading';
import './style.css';

class ConvertedCurrencyList extends Component {
  componentDidMount() {
    const { requestCurrencies, currentBalance } = this.props;
    requestCurrencies(currentBalance.currency);
  }

  currencyConversion() {
    const { convertedValues, currentBalance } = this.props;
    return convertedValues.map(currency => {
      const total = calculateBalanceTotal(currentBalance.value, currency.value);
      return [currency.currency, currency.value, total];
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          {
            (this.props.loading) ?
              <Loading /> :
              <SimpleGridList
                {...this.props}
                values={this.props.convertedValues}
                valuesTitle={['Currency', 'Price Unit', 'Balance Total']}
                valuesRows={this.currencyConversion()}
              />
          }
        </div>
      </div>
    );
  }
}

export default ConvertedCurrencyList;
