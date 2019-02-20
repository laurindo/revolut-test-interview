import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExchangeWrapper from '../components/Exchange';

class ExchangeListContainer extends Component {
  render() {
    const { exchanges } = this.props;
    return (
      <ExchangeWrapper exchanges={exchanges} />
    );
  }
}

const mapStateToProps = state => {
  return {
    exchanges: state.exchange.exchanges,
  };
};

export default connect(
  mapStateToProps,
  null,
)(ExchangeListContainer);
