import React, { useState } from 'react';
import KeyboardItem from './KeyboardItem';

const KeyboardRow = ({ row, changeValueSelected, valueSelected }) => (
  <div className='keyboard-row'>
    {
      row.map((item, index) => {
        return (
          <KeyboardItem
            key={index}
            item={ item }
            previousValue={ valueSelected }
            onClick={ changeValueSelected } />
        )
      })
    }
  </div>
);

export default KeyboardRow;
