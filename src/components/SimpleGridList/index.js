import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const SimpleGridList = ({ valuesTitle, valuesRows }) => (
  <ul className='list'>
    <Item className='title' values={valuesTitle} />
    {
      valuesRows.map((value, index) => {
        return (
          <Item key={index} values={value} />
        );
      })
    }
  </ul>
);

SimpleGridList.propTypes = {
  valuesTitle: PropTypes.array.isRequired,
  valuesRows: PropTypes.array.isRequired,
};

export default SimpleGridList;
