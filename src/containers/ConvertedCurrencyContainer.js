import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import ConvertedCurrencyList from '../components/ConvertedCurrencyList';

const mapStateToProps = state => {
  return {
    convertedValues: state.convertedCurrencyList.convertedValues,
    currentBalance: state.balance.currentBalance,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    requestCurrencies: (currency) => {
      dispatch({ type: types.REQUEST_CURRENCY_CONVERTED, payload: currency });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConvertedCurrencyList);
