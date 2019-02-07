import React, { Component } from 'react';
import Button from '../Button';
import './style.css';

class Modal extends Component {
  render() {
    return (
      <div className='modal'>
        <div className='modal_inner'>
          <h1>{this.props.text}</h1>
          <Button title="Close Me" onClick={() => this.props.hideModal()} />
        </div>
      </div>
    );
  }
}

export default Modal;
