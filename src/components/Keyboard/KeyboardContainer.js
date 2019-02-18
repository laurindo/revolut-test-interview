import React, { useState } from 'react';
import KeyboardRow from './KeyboardRow';

const KeyBoardContainer = ({ items }) => (
  <div>
    <KeyboardRow items={ items } />
  </div>
);

export default KeyBoardContainer;
