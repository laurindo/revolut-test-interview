import React, { Component } from 'react';
import Button from '../Button';
import './style.css';

class Modal extends Component {
  render() {
    return (
      <div className='modal'>
        <div className='modal_inner'>
          <div>
            { this.props.children }
          </div>
          <div className="footer">
            <Button
              className="secondary"
              title="close"
              onClick={ () => this.props.hideModal() } />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
