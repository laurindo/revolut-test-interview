import React from 'react';
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';
import './title.css';

const Title = ({ title, className = 'primary' }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    { props => ( <h2 className={className} style={ props }>{ title }</h2>) }
  </Spring>
);

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
