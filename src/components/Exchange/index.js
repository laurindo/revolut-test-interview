import React from "react";
import PropTypes from 'prop-types';
import ExchangeList from './ExchangeList';
import Title from '../Title';

import './style.css';

const ExchangeWrapper = ({ exchanges }) => {
  return (
    <div className="exchange-wrapper">
      <Title title="Exchanges" />
      {
        (exchanges.length) ?
          exchanges.map((exchange, index) => {
            return (
              <ExchangeList key={index} exchange={exchange} />
            );
          }) :
          <p className="empty-exchanges"><i className="fa fa-flag"></i></p>
      }
    </div>
  );
};

ExchangeWrapper.propTypes = {
  exchange: PropTypes.array,
};

export default ExchangeWrapper;
