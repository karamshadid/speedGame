import React, {Component} from "react";
import "./Circle.css";

class Circle extends Component {

  render() {
    return (
      <div className={"ball" + (this.props.active ? " active" : "")}
      onClick={this.props.click}></div>
    );
  }
}

export default Circle;
