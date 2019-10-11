import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
  }

  render() {
    return (
      <div>
        Form
        <input></input>
        <input></input>
        <input></input>
      </div>
    );
  }
}

export default Form;
