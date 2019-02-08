import React, { Component } from "react";
import './style.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { disabled, icon, title } = this.props;
    return (
      <button
        disabled={disabled}
        className="btnSave"
        onClick={() => this.handleClick() }>
          { icon ? <i className={"fa fa-" + this.props.icon}></i> : title }
      </button>
    );
  }
}
