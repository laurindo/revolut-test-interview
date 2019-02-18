import React, { useState } from 'react';
import KeyboardRow from './KeyboardRow';
import './style.css';

const KeyboardWrapper = ({ items }) => (
  <div className='keyboard-wrapper'>
    {
      items.map((row, index) => {
        return <KeyboardRow key={index} row={ row } />
      })
    }
  </div>
);

export default KeyboardWrapper;
