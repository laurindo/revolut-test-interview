import { connect } from 'react-redux';
import * as currencyActions from '../actions/CurrencyActions';
import * as actionTypes from '../constants/ActionTypes';
import Modal from '../components/Modal';

const mapStateToProps = state => {
  return {
    balances: state.balance.balances,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    showModal: (selectedCurrency) => {
      dispatch(currencyActions.changeCurrency(selectedCurrency));
    },
    hideModal: (currentBalance) => {
      dispatch({ type: actionTypes.REQUEST_QUOTATION, payload: currentBalance });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
