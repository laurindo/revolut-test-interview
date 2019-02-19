import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/ActionTypes';
import ExchangeWrapper from '../components/Exchange';

class ExchangeListContainer extends Component {
  render() {
    return (
      <ExchangeWrapper exchanges={[1,2,3]} />
    );
  }
}

const mapStateToProps = state => {
  return {
    balances: state.balance.balances,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    slideWidget: (selectedCurrency, balances) => {
      //dispatch({ type: actionTypes.CHANGE_BALANCE, payload: getCurrentBalance(balances, selectedCurrency) });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeListContainer);
