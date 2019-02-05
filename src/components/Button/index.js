import React, { Component } from "react"

export default class Button extends Component {
  handleClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <button
        disabled={this.props.disabled}
        className="btnSave"
        onClick={() => this.handleClick() }>
          { this.props.title }
      </button>
    );
  }
}
