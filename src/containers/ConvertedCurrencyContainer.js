import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import { calculateBalanceTotal } from '../utils/BalanceUtils';
import ConvertedCurrencyGrid from '../components/ConvertedCurrencyGrid';

class ConvertedCurrencyGridContainer extends Component {
  constructor(props) {
    super(props);
    this.currencyConversion = this.currencyConversion.bind(this);
  }

  componentDidMount() {
    const { requestCurrencies, currentBalance } = this.props;
    requestCurrencies(currentBalance.currency);
  }

  currencyConversion() {
    console.log('');
    const { convertedValues, currentBalance } = this.props;
    return convertedValues.map(currency => {
      const total = calculateBalanceTotal(currentBalance.value, currency.value);
      return [currency.currency, currency.value, total];
    });
  }

  render() {
    return (
      <ConvertedCurrencyGrid
        props={this.props}
        currencyConversion={ this.currencyConversion } />
    );
  }
}

const mapStateToProps = state => {
  return {
    convertedValues: state.convertedCurrencyList.convertedValues,
    currentBalance: state.balance.currentBalance,
    loading: state.convertedCurrencyList.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCurrencies: (currency) => {
      dispatch({ type: types.REQUEST_CURRENCY_CONVERTED, payload: currency });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConvertedCurrencyGridContainer);
