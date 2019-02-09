import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/ActionTypes';
import BalanceSlider from '../components/BalanceSlider';
import BalanceWidget from '../components/BalanceSlider/BalanceWidget';
import { getCurrentBalanceCurrency, getCurrentBalance } from '../utils/BalanceUtils';

class BalanceSliderContainer extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      nextArrow: null,
      prevArrow: null,
      afterChange: current => this.props.slideWidget(current, this.props.balances),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.requestData(), 1000 * 60 * 10);
    this.requestData();
  }

  requestData() {
    const { currentBalance } = this.props;
    this.props.getCurrentQuoation(currentBalance);
    this.props.getAllCurrencies();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  renderBalanceWidget() {
    return this.props.balances.map((balance, index) => (
      <BalanceWidget
        key={index}
        title='Quotation'
        balance={balance}
        {...this.props} />
    ));
  }

  render() {
    return (
      <BalanceSlider
        widgets={this.renderBalanceWidget()}
        settings={this.settings}
        props={this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    balances: state.balance.balances,
    currentBalance: state.balance.currentBalance,
    currentQuotation: state.balance.currentQuotation,
    isShowModal: state.modal.show,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    slideWidget: (selectedCurrency, balances) => {
      dispatch({ type: actionTypes.CHANGE_BALANCE, payload: getCurrentBalance(balances, selectedCurrency) });
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BalanceSliderContainer);
