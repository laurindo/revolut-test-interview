import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';

class ApiProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
    this.getRateValues()
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getRateValues(), 1000 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getRateValues() {
    const urlCurrencies = ExhangeRateEndpointService.getCurrencies();
    fetch(urlCurrencies)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        {
          Object.keys(this.state.data).map((keyName, index) => {
            return (
              <p key={index}>{ keyName }: { this.state.data[keyName] }</p>
            );
          })
        }
      </div>
    );
  }
}

export default ApiProvider;
