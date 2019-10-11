import React, { Component } from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      price: 0,
      img: ""
    };
    this.state = this.initialState;
  }

  createProduct = () => {
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    };
    axios.post("/api/product", { newProduct }).then(res => {
      this.setState({ inventory: res.data, name: "", price: 0, img: "" });
    });
  };

  updateProduct = () => {
    const updatedForm = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    };
    axios.put();
  };

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

  //   handleDelete;

  render() {
    console.log(this.state);
    return (
      <div>
        Form
        <label>Image Url</label>
        <input
          name="img"
          value={this.state.img}
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
        <button onClick={this.createProduct}>Add to Inventory</button>
        <Dashboard key={this.props.componentDidMount} />
      </div>
    );
  }
}

export default Form;
