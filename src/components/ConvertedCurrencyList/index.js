import React, { Component } from 'react';
import './style.css';

class ConvertedCurrencyList extends Component {
  componentDidMount() {
    const { requestCurrencies, currentBalance } = this.props;
    requestCurrencies(currentBalance.currency);
  }

  renderList() {
    return this.props.convertedValues.map((currency, index) => {
      return (
        <li key={index}>{ currency.currency } - { currency.value }</li>
      );
    });
  }
  render() {
    return (
      <div className='container'>
        <div className="row">
          <ul className='list'>
            { this.renderList() }
          </ul>
        </div>
      </div>
    );
  }
}

export default ConvertedCurrencyList;
