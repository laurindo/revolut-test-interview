import { connect } from 'react-redux';
import * as currencyActions from '../actions/CurrencyActions';
import * as actionTypes from '../constants/ActionTypes';
import Converter from '../components/Converter';

const mapStateToProps = state => {
  return {
    currencies: state.currency.currencies,
    selectedCurrency: state.currency.selectedCurrency,
    fetching: state.currency.fetching,
    error: state.currency.error,
    success: state.currency.success,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onRequest: () => {
      dispatch({ type: actionTypes.REQUEST_CURRENCY_NAMES });
    },
    changeCurrency: (selectedCurrency) => {
      dispatch(currencyActions.changeCurrency(selectedCurrency));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
