import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import { formatCurrenciesToGrid } from '../utils/BalanceUtils';
import { startPooling, closePooling } from '../utils/GeneralUtils';
import ConvertedCurrencyGrid from '../components/ConvertedCurrencyGrid';

class ConvertedCurrencyGridContainer extends Component {
  constructor(props) {
    super(props);
    this.currencyConversion = this.currencyConversion.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies() {
    const { requestCurrencies, currentBalance } = this.props;
    this.timer = startPooling(this.getCurrencies.bind(this));
    requestCurrencies(currentBalance.currency);
  }

  componentWillUnmount() {
    this.timer = closePooling(this.timer);
  }

  currencyConversion() {
    const { convertedValues, currentBalance } = this.props;
    return formatCurrenciesToGrid(convertedValues, currentBalance);
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
