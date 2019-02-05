import React, { Component } from 'react';
import Currency from '../Currency';
import ExhangeRateEndpointService from '../../utils/ExchangeRateEndpointutil';

class Converter extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.onRequest(), 1000 * 60);
    this.props.onRequest();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <div>
        { this.props.fetching ? <p>fetching...</p> : <p>{ JSON.stringify(this.props.selectedCurrency) }</p> }
        <Currency
          changeCurrency={this.props.changeCurrency}
          selectedCurrency={this.props.selectedCurrency}
          options={this.props.currencies}  />
      </div>
    );
  }
}

export default Converter;
