import React from 'react';
import KeyboardRow from './KeyboardRow';
import './style.css';

const items = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['.', '0', 'DELETE']];

const KeyboardWrapper = (props) => (
  <div className='keyboard-wrapper'>
    {
      items.map((row, index) => {
        return <KeyboardRow {...props} key={index} row={ row } />
      })
    }
  </div>
);

export default KeyboardWrapper;
