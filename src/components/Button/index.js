import React, { Component } from "react";
import './button.css';

export default class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    const { disabled, icon, title, className } = this.props;
    return (
      <button
        disabled={disabled}
        className={className}
        onClick={() => this.handleClick() }>
          { icon ? <i className={"fa fa-" + this.props.icon}></i> : title }
      </button>
    );
  }
}
