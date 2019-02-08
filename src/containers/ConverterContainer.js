import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as converterActions from '../actions/ConverterActions';
import * as actionTypes from '../constants/ActionTypes';
import Currency from '../components/Currency';
import Button from '../components/Button';
import InputNumber from '../components/InputNumber';

import '../components/Converter/style.css';

class ConverterContainer extends Component {
  componentDidMount() {
    //this.timer = setInterval(() => this.props.onRequest(), 1000 * 60);
    this.props.mountSelectCurrencies();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <div className="converter-area">
        <div className="converter-widget">
          <Currency
            changeCurrency={this.props.selectCurrency}
            selectedCurrency={this.props.selectedCurrency}
            options={this.props.currencies}  />

          <InputNumber
            onChange={this.props.changeValueSelected}
            value={this.props.valueSelected} />
        </div>

        <div className='exchange-area'>
          <Button
            title="exchange"
            icon="exchange"
            onClick={() => alert('change values')}
            />
        </div>

        <div className="converter-widget">
          <Currency
            changeCurrency={this.props.selectCurrencyConversion}
            selectedCurrency={this.props.selectedCurrencyConversion}
            options={this.props.currencies}  />

          <InputNumber
            onChange={this.props.changeValueConverted}
            value={this.props.valueConverted} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.balance.balances,
    currentBalance: state.balance.currentBalance,
    selectedCurrency: state.balance.currentBalance,
    selectedCurrencyConversion: state.converter.selectedCurrencyConversion,
    valueSelected: state.converter.valueSelected,
    valueConverted: state.converter.valueConverted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountSelectCurrencies: () => {
      dispatch(converterActions.mountSelectCurrencies());
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
