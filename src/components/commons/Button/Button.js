import React from "react";

import "./Button.scss";
class Button extends React.Component {
  render() {
    const { children: title } = this.props;
    return (
      <button className="button__container">
        <div className="button__title">{title}</div>
      </button>
    );
  }
}

export default Button;
