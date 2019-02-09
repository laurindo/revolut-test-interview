import React from 'react';
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';
import './valueNumber.css';

const ValueNumber = ({ value }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    { props => ( <span className="value-currency" style={ props }>{ value }</span>) }
  </Spring>
);

ValueNumber.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ValueNumber;
