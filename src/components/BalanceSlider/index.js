import React from "react";
import Slider from "react-slick";
import Button from '../Button';
import Modal from '../../containers/ModalContainer';
import Title from '../Title';
import ConverterContainer from '../../containers/ConverterContainer';

import './style.css';

const BalanceSlider = ({ props, widgets, settings }) => (
  <div className='simple-slider'>
    <Title
      className="primary"
      title={ props.title } />

    {
      props.isShowModal ?
        <Modal>
          <ConverterContainer {...props} />
        </Modal> :
        null
    }

    <Slider {...settings}>{ widgets }</Slider>

    <div className='exchange-area'>
      <Button
        title="exchange"
        icon="refresh"
        className="primary"
        onClick={() => props.showModal()}
        />
    </div>
  </div>
);

export default BalanceSlider;
