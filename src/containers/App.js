import React from "react";
import { Provider } from "react-redux";

import configureStore from "../config/configureStore";
import Logo from "../components/Logo";
import BalanceSliderContainer from "./BalanceSliderContainer";
import ConvertedCurrencyContainer from "./ConvertedCurrencyContainer";
import ContainerAnimated from "../components/ContainerAnimated";

const store = configureStore();

const App = () => (
  <div className="index-page">
    <Provider store={store}>
      <ContainerAnimated>
        <Logo width="20%" height="20%" />
        <BalanceSliderContainer title="Balances" />
        <ConvertedCurrencyContainer />
      </ContainerAnimated>
    </Provider>
  </div>
);

export default App;
