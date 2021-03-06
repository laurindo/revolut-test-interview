import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as converterActions from '../actions/ConverterActions';
import * as actionTypes from '../constants/ActionTypes';
import Converter from '../components/Converter';
import {
  getValuesToIncreaseTransaction,
} from '../utils/BalanceUtils';
import { getObjectExchangeList } from '../utils/ExchangeUtils';

class ConverterContainer extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    const { balances, mountSelectCurrencies, currentBalance, convertedValues } = this.props;
    mountSelectCurrencies(balances, currentBalance, convertedValues);
  }

  formatDigits(value) {
    return parseFloat(value).toFixed(2);
  }

  render() {
    return (
      <Converter
        textInputRef={ this.textInputRef }
        formatDigits={ this.formatDigits.bind(this) }
        {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    convertedValues: state.convertedCurrencyList.convertedValues,
    currencies: state.converter.currencies,
    currentBalance: state.balance.currentBalance,
    temporaryBalance: state.balance.temporaryBalance,
    selectedCurrency: state.converter.selectedCurrency,
    selectedCurrencyConversion: state.converter.selectedCurrencyConversion,
    valueSelected: state.converter.valueSelected,
    valueConverted: state.converter.valueConverted,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountSelectCurrencies: (balances, currentBalance, convertedValues) => {
      dispatch(converterActions.mountSelectCurrencies(balances, currentBalance, convertedValues));
    },
    selectCurrency: value => {
      dispatch({ type: actionTypes.SELECT_CURRENCY, payload: value });
      dispatch({ type: actionTypes.CHANGE_SELECTED_CURRENCY, payload: value });
    },
    selectCurrencyConversion: value => {
      dispatch({ type: actionTypes.SELECT_CURRENCY_CONVERSION, payload: value });
      dispatch({ type: actionTypes.CHANGE_VALUE_CONVERTED_FROM_COMBOBOX });
    },
    changeValueSelected: value => {
      dispatch({ type: actionTypes.CHANGE_VALUE_SELECTED, payload: value });
      dispatch({ type: actionTypes.CHANGE_VALUE_CONVERTED, payload: value });
    },
    changeValueConverted: value => {
      dispatch({ type: actionTypes.CHANGE_VALUE_CONVERTED, payload: value });
    },
    hideModal: () => {
      dispatch({ type: actionTypes.HIDE_MODAL });
      dispatch({ type: actionTypes.CLEAR_CONVERTER });
      dispatch({ type: actionTypes.RESET_TEMPORARY_BALANCE });
    },
    confirmTransaction: values => {
      dispatch({ type: actionTypes.PROCESS_TRANSACTION_EXCHANGE, payload: getValuesToIncreaseTransaction(values) });
      dispatch({ type: actionTypes.ADD_EXCHANGE, payload: getObjectExchangeList(values) });
      dispatch({ type: actionTypes.HIDE_MODAL });
      dispatch({ type: actionTypes.CLEAR_CONVERTER });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterContainer);
