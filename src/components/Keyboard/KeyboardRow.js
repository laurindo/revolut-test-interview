import React, { useState } from 'react';
import KeyboardItem from './KeyboardItem';

const KeyboardRow = ({ row }) => (
  <div className='keyboard-row'>
    {
      row.map((item, index) => {
        return <KeyboardItem key={index} item={ item } />
      })
    }
  </div>
);

export default KeyboardRow;
