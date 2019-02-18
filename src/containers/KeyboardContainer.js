import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as converterActions from '../actions/ConverterActions';
import * as actionTypes from '../constants/ActionTypes';
import KeyboardWrapper from '../components/Keyboard/KeyboardWrapper';

class KeyboardContainer extends Component {
  render() {
    const items = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['-', '0', ',']];
    return (
      <KeyboardWrapper items={ items } />
    );
  }
}

const mapStateToProps = state => {
  return {
    convertedValues: state.convertedCurrencyList.convertedValues,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mountSelectCurrencies: (balances, currentBalance, convertedValues) => {
      dispatch(converterActions.mountSelectCurrencies(balances, currentBalance, convertedValues));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeyboardContainer);
