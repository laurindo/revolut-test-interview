import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import Button from '../Button';
import BalanceWidget from './BalanceWidget';

export default class BalanceSlider extends Component {
  componentDidMount() {
    const { currentBalance } = this.props;
    this.timer = setInterval(() => this.props.getCurrentQuoation(currentBalance), 1000 * 60);
    this.props.getCurrentQuoation(currentBalance);
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
      dots: true,
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
        <Slider {...settings}>{ this.renderBalanceWidget() }</Slider>
        <Button title="exchange" />
      </div>
    );
  }
}
