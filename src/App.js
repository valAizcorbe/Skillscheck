import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard key={this.state.inventory} />
        <Form key={this.componentDidMount} />
      </div>
    );
  }
}

export default App;
