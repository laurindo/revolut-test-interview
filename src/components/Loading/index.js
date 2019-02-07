import React from 'react';
import loading from '../../images/ripple.svg';
import './style.css';

const Loading = () => (
  <div className="loading">
    <img src={loading} className="" alt="loading" />
  </div>
);

export default Loading;
