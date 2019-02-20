import React from "react";
import PropTypes from 'prop-types';

const ExchangeList = ({ exchange }) => {
  return (
    <div className="exchange-list">
      <div className="area-icon">
        <p><i className="fa fa-refresh"></i></p>
      </div>

      <div className="area-title">
        <h6>exchanged to { exchange.to }</h6>
        <small>{ exchange.hour }</small>
      </div>

      <div className="area-value">
        <p className="debt">{ exchange.debt }</p>
        <p className="credit">{ exchange.credit }</p>
      </div>
    </div>
  );
};

export default ExchangeList;
