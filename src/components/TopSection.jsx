import "./css/TopSection.css";
import React, { Component } from "react";

class Mid2 extends Component {
  render() {
    return (
      <div className="mid-img mt-4 mb-4 rounded-xl"> 
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  } 
}

export default Mid2;