import { connect } from 'react-redux';
import * as currencyActions from '../actions/CurrencyActions';
import * as actionTypes from '../constants/ActionTypes';
import BalanceSlider from '../components/BalanceSlider';

const mapStateToProps = state => {
  return {
    balances: state.balance.balances,
    currentBalance: state.balance.currentBalance,
    currentQuotation: state.balance.currentQuotation,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeBalance: (selectedCurrency) => {
      dispatch(currencyActions.changeCurrency(selectedCurrency));
    },
    getCurrentQuoation: (currentBalance) => {
      dispatch({ type: actionTypes.REQUEST_QUOTATION, payload: currentBalance });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceSlider);
