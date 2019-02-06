import React, { Component } from 'react';
import CurrencyList from '../CurrencyList';
import './style.css';

class ConvertedCurrencyList extends Component {
  componentDidMount() {
    const { requestCurrencies, currentBalance } = this.props;
    requestCurrencies(currentBalance.currency);
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          {
            (this.props.loading) ? <CurrencyList {...this.props} /> : <p>loading...</p>
          }
        </div>
      </div>
    );
  }
}

export default ConvertedCurrencyList;
