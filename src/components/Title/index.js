import React from 'react';
import { Spring } from 'react-spring';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    { props => ( <p style={ props }>{ title }</p>) }
  </Spring>
);

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
