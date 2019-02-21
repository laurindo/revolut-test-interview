import React from 'react';
import Currency from '../Currency';
import Button from '../Button';
import ValueNumber from '../ValueNumber';
import InputNumber from '../InputNumber';
import Title from '../Title';
import Quotation from '../Quotation';
import KeyboardContainer from '../../containers/KeyboardContainer';

import './style.css';

const Converter = (props) => (
  <div className="converter-area">
    <div className="head">
      <Title
        title="Balance"
        className="secondary" />

      <ValueNumber value={ props.temporaryBalance.label } />
      <ValueNumber value={ props.temporaryBalance.symbol } />
      <ValueNumber value={ props.temporaryBalance.value.toString() } />
    </div>

    <div className="converter-widget container">
      <div className="col-xs-6 col-sm-4 col-md-4">
        <Currency
          changeCurrency={ props.selectCurrency }
          selectedCurrency={ props.selectedCurrency }
          options={ props.currencies }  />
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6 field-red">
        <h3 className='minus'>-</h3>
        <InputNumber
          readonly={ true }
          onChange={ props.changeValueSelected }
          value={ props.valueSelected.toString() } />
      </div>

      <div className="col-xs-12 col-sm-3 col-md-3 compare-quotation">
        <Quotation
          value={ '1' }
          symbol={ props.currentBalance.symbol }
          currency={ props.currentBalance.currency }
          />

          <span> = </span>

        <Quotation
          value={ props.formatDigits(props.selectedCurrencyConversion.quotation) }
          symbol={ props.selectedCurrencyConversion.symbol }
          currency={ props.selectedCurrencyConversion.label }
          />
      </div>


    </div>

    <hr />

    <div className="converter-widget container">
      <div className="col-xs-6 col-sm-4 col-md-4">
        <Currency
          changeCurrency={ props.selectCurrencyConversion }
          selectedCurrency={ props.selectedCurrencyConversion }
          options={ props.currencies }  />
      </div>

      <div className="col-xs-6 col-sm-6 col-md-6 field-green">
        <h3 className='plus'>+</h3>
        <InputNumber
          readonly={ true }
          onChange={ props.changeValueConverted}
          value={ props.valueConverted.toString() } />
      </div>

      <div className="col-xs-12 col-sm-3 col-md-3 compare-quotation">
        <Quotation
          value={ '1' }
          symbol={ props.selectedCurrencyConversion.symbol }
          currency={ props.selectedCurrencyConversion.label }
          />

        <span> = </span>

        <Quotation
          value={ props.formatDigits(1/props.selectedCurrencyConversion.quotation) }
          symbol={ props.currentBalance.symbol }
          currency={ props.currentBalance.currency }
          />

      </div>

    </div>

    <div>
      <KeyboardContainer />
    </div>

    <div className="footer">
      <Button
        className="success"
        title="Confirm"
        disabled={ parseFloat(props.temporaryBalance.value) < 0 }
        onClick={ () => { props.confirmTransaction(props) } } />

      <Button title="Cancel" onClick={ props.hideModal } />
    </div>

  </div>
);

export default Converter;
