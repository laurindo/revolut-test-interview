import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../config/configureStore';

import Logo from '../components/Logo';
import BalanceSliderContainer from './BalanceSliderContainer';
import ConvertedCurrencyContainer from './ConvertedCurrencyContainer';
import ContainerAnimated from '../components/ContainerAnimated';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <div className="index-page">
        <Provider store={store}>
          <ContainerAnimated>
            <Logo width='20%' height='20%' />
            <BalanceSliderContainer title="Balances" />
            <ConvertedCurrencyContainer />
          </ContainerAnimated>
        </Provider>
      </div>
    );
  }
}
