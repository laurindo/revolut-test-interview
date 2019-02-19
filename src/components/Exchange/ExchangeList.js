import React from "react";
import PropTypes from 'prop-types';

const ExchangeList = ({ exchanges }) => {
  return (
    <div className="exchange-list">
      <div className="area-icon">
        <p><i className="fa fa-refresh"></i></p>
      </div>

      <div className="area-title">
        <h6>exchanged to EUR</h6>
        <small>time 10:18</small>
      </div>

      <div className="area-value">
        <p className="debt">- £ 50</p>
        <p className="credit">+ € 34.56</p>
      </div>
    </div>
  );
};

export default ExchangeList;
