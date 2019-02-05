import React, { PureComponent } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class Currency extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.props.changeCurrency(selectedOption);
  }

  render() {
    return (
      <Select
        value={this.props.selectedCurrency}
        onChange={this.handleChange}
        options={this.props.options}
        />
    );
  }
}

Currency.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
