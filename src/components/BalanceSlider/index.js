import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';
import Button from '../Button';

export default class BalanceSlider extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0
  };

  componentDidMount() {
    const { currentBalance } = this.props;
    this.timer = setInterval(() => this.props.getCurrentQuoation(currentBalance), 1000 * 60);
    this.props.getCurrentQuoation(currentBalance);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  renderContent() {
    return this.props.balances.map((balance, index) => {
      return (
        <div key={index} className='slider-widget'>
          <div className='content'>
            <p>Quotation: { this.props.currentQuotation }</p>
            <h3>{balance.symbol} {balance.value}</h3>
            <h4>{balance.currency}</h4>
          </div>
        </div>
      );
    });
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
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
      <div className='simple-slider'>
        <h2 className='title'>{ this.props.title }</h2>

        <p>
          AfterChange => activeSlide: <strong>{this.state.activeSlide2}</strong>
        </p>

        <Slider {...settings}>
          { this.renderContent() }
        </Slider>
        <Button title="exchange" />
      </div>
    );
  }
}
