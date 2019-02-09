import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import Button from '../Button';
import BalanceWidget from './BalanceWidget';
import Modal from '../../containers/ModalContainer';
import ConverterContainer from '../../containers/ConverterContainer';

export default class BalanceSlider extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.requestData(), 1000 * 60 * 10);
    this.requestData();
  }

  requestData() {
    const { currentBalance } = this.props;
    this.props.getCurrentQuoation(currentBalance);
    this.props.getAllCurrencies();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  renderBalanceWidget() {
    return this.props.balances.map((balance, index) => (
      <BalanceWidget
        key={index}
        title='Quotation'
        balance={balance}
        {...this.props} />
    ));
  }

  render() {
    const settings = {
      dots: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      nextArrow: null,
      prevArrow: null,
      afterChange: current => this.props.slideWidget(current, this.props.balances),
    };

    return (
      <div className='simple-slider'>
        <h2 className='title'>{ this.props.title }</h2>
        {
          this.props.isShowModal ?
            <Modal>
              <ConverterContainer {...this.props} />
            </Modal> :
            null
        }
        <Slider {...settings}>{ this.renderBalanceWidget() }</Slider>
        <div className='exchange-area'>
          <Button
            title="exchange"
            icon="refresh"
            className="primary"
            onClick={() => this.props.showModal()}
            />
        </div>
      </div>
    );
  }
}
