import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ values, className }) => (
  <li>
    {
      values.map((value, index) => {
        return (
          <p className={className} key={index}>{ value }</p>
        )
      })
    }
  </li>
);

Item.propTypes = {
  values: PropTypes.array.isRequired,
};

export default Item;
