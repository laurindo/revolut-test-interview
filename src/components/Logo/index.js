import React from 'react';
import logo from '../../images/logo.png';
import './style.css';

const Logo = ({ width, height }) => (
  <div className="logo">
    <img width={width} height={height} src={logo} className="" alt="revolut logo" />
  </div>
);

export default Logo;
