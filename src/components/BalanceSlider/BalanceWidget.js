import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BalanceWidget extends Component {
  render() {
    const { title, currentQuotation, balance } = this.props;
    return (
      <div className='slider-widget'>
        <div className='content'>
          <p>{title} { currentQuotation }</p>
          <h3>{balance.symbol} {balance.value}</h3>
          <h4>{balance.currency}</h4>
        </div>
      </div>
    );
  }
}

BalanceWidget.propTypes = {
  balances: PropTypes.array.isRequired,
  currentQuotation: PropTypes.number.isRequired,
};

export default BalanceWidget;
