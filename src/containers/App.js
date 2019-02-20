import React from "react";
import { Provider } from "react-redux";

import configureStore from "../config/configureStore";
import Logo from "../components/Logo";
import BalanceSliderContainer from "./BalanceSliderContainer";
import ConvertedCurrencyContainer from "./ConvertedCurrencyContainer";
import ContainerAnimated from "../components/ContainerAnimated";
import ExchangeListContainer from './ExchangeListContainer';

const store = configureStore();

const App = () => (
  <div className="index-page">
    <Provider store={store}>
      <ContainerAnimated>
        <div className="container">
          <Logo width="20%" height="20%" />
          <BalanceSliderContainer title="Balances" />
          <div className="col-xs-12 col-sm-12 col-lg-6 exchange-list-container">
            <ExchangeListContainer />
          </div>

          <div className="col-xs-12 col-sm-12 col-lg-6">
            <ConvertedCurrencyContainer />
          </div>
        </div>
      </ContainerAnimated>
    </Provider>
  </div>
);

export default App;
