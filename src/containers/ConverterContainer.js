import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as converterActions from '../actions/ConverterActions';
import * as actionTypes from '../constants/ActionTypes';
import Currency from '../components/Currency';
import Title from '../components/Title';
import ValueNumber from '../components/ValueNumber';
import InputNumber from '../components/InputNumber';

import '../components/Converter/style.css';

class ConverterContainer extends Component {
  componentDidMount() {
    const { balances, mountSelectCurrencies, currentBalance } = this.props;
    mountSelectCurrencies(balances, currentBalance);
  }

  render() {
    return (
      <div className="converter-area">

        <div className="head">
          <Title title="Balance" />
          <span> { this.props.currentBalance.currency } </span>
          <span> { this.props.currentBalance.symbol } </span>
          <ValueNumber value={ this.props.currentBalance.value } />
        </div>

        <div className="converter-widget">
          <div className="fields">
            <Currency
              changeCurrency={this.props.selectCurrency}
              selectedCurrency={this.props.selectedCurrency}
              options={this.props.currencies}  />

            <InputNumber
              onChange={this.props.changeValueSelected}
              value={this.props.valueSelected} />
          </div>
        </div>

        <div className="converter-widget">
          <div className="fields">
            <Currency
              changeCurrency={this.props.selectCurrencyConversion}
              selectedCurrency={this.props.selectedCurrencyConversion}
              options={this.props.currencies}  />

            <InputNumber
              onChange={this.props.changeValueConverted}
              value={this.props.valueConverted} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    convertedValues: state.convertedCurrencyList.convertedValues,
    currencies: state.converter.currencies,
    currentBalance: state.balance.currentBalance,
    selectedCurrency: state.converter.selectedCurrency,
    selectedCurrencyConversion: state.converter.selectedCurrencyConversion,
    valueSelected: state.converter.valueSelected,
    valueConverted: state.converter.valueConverted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountSelectCurrencies: (balances, currentBalance) => {
      dispatch(converterActions.mountSelectCurrencies(balances, currentBalance));
    },
    selectCurrency: value => {
      dispatch({ type: actionTypes.SELECT_CURRENCY, payload: value });
    },
    selectCurrencyConversion: value => {
      dispatch({ type: actionTypes.SELECT_CURRENCY_CONVERSION, payload: value });
    },
    changeValueSelected: value => {
      dispatch({ type: actionTypes.CHANGE_VALUE_SELECTED, payload: value });
    },
    changeValueConverted: value => {
      dispatch({ type: actionTypes.CHANGE_VALUE_CONVERTED, payload: value });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterContainer);
