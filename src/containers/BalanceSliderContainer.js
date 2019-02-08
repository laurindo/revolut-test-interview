import { connect } from 'react-redux';
import * as actionTypes from '../constants/ActionTypes';
import BalanceSlider from '../components/BalanceSlider';
import { getCurrentBalanceCurrency } from '../utils/GeneralUtils';

const mapStateToProps = state => {
  return {
    balances: state.balance.balances,
    currentBalance: state.balance.currentBalance,
    currentQuotation: state.balance.currentQuotation,
    isShowModal: state.modal.show,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    slideWidget: (selectedCurrency, balances) => {
      dispatch({ type: actionTypes.REQUEST_CURRENCY_CONVERTED, payload: getCurrentBalanceCurrency(balances, selectedCurrency) });
    },
    showModal: () => {
      dispatch({ type: actionTypes.SHOW_MODAL });
    },
    getAllCurrencies: () => {
      dispatch({ type: actionTypes.REQUEST_CURRENCIES });
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
