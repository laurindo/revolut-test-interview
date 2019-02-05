import React from 'react';
import './container-animated.css';

const ContainerAnimated = ({ children }) => (
  <div className="page-header header-filter">
    <div className="squares square1"></div>
    <div className="squares square2"></div>
    <div className="squares square3"></div>
    <div className="squares square4"></div>
    <div className="squares square5"></div>
    <div className="squares square6"></div>
    <div className="squares square7"></div>
    {
      children
    }
  </div>
);

export default ContainerAnimated;
