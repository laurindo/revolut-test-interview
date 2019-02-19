import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../constants/ActionTypes';
import KeyboardWrapper from '../components/Keyboard/KeyboardWrapper';

class KeyboardContainer extends Component {
  render() {
    return <KeyboardWrapper {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    valueSelected: state.converter.valueSelected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeValueSelected: value => {
      dispatch({ type: actionTypes.CHANGE_VALUE_SELECTED, payload: value });
      dispatch({ type: actionTypes.CHANGE_VALUE_CONVERTED, payload: value });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeyboardContainer);
