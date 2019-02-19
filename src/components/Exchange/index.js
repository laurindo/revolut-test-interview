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
        exchanges.map((exchange, index) => {
          return (
            <ExchangeList key={index} exchange={exchange} />
          );
        })
      }
    </div>
  );
};

export default ExchangeWrapper;
