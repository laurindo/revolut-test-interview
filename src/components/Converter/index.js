import React, { Component } from 'react';
import Currency from '../Currency';

class Converter extends Component {
  componentDidMount() {
    //this.timer = setInterval(() => this.props.onRequest(), 1000 * 60);
    this.props.onRequest();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <div>
        <Currency
          changeCurrency={this.props.changeCurrency}
          selectedCurrency={this.props.selectedCurrency}
          options={this.props.currencies}  />
      </div>
    );
  }
}

export default Converter;
