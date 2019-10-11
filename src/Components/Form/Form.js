import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.initialState = {
      name: "",
      price: 0,
      imgurl: ""
    };
    this.state = this.initialState;
  }

  handleChange = e => {
    let { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateState = updateInput => {
    let { name } = updateInput.target;
    this.setState({
      [name]: updateInput
    });
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        Form
        <label>Image Url</label>
        <input
          name="imgurl"
          value={this.state.imgurl}
          onChange={e => this.handleChange(e)}
        />
        <label>Product Name</label>
        <input
          name="name"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <label>Price</label>
        <input
          name="price"
          value={this.state.price}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.resetState()}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;
