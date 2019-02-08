import React from 'react';
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';

const ValueNumber = ({ value }) => (
  <Spring from={{ number: 0 }} to={{ number: 1 }}>
    { props => ( <p style={ props }>{ value }</p>) }
  </Spring>
);

ValueNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ValueNumber;
