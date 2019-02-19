import React from 'react';
import { limitFraction, removeLastValue } from '../../utils/GeneralUtils';

const KeyboardItem = ({ previousValue = '', item, onClick }) => {
  if (item !== 'DELETE') {
    return <p className='keyboard-item' onClick={() => onClick(limitFraction(previousValue, item))}>{ item }</p>
  }
  return <p className='keyboard-item' onClick={() => onClick(removeLastValue(previousValue))}><i className='fa fa-toggle-left'></i></p>
};

export default KeyboardItem;
