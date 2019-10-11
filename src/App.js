import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [
        {
          name: "Tesla X",
          price: 80000,
          imgurl:
            "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/13720/2019-tesla-model%20x-front_13720_032_640x480_ppsw.png"
        },
        {
          name: "Tesla S",
          price: 60000,
          imgurl:
            "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/13794/2019-tesla-model%20s-front_13794_032_640x480_ppsw.png"
        },
        {
          name: "Tesla 3",
          price: 30000,
          imgurl:
            "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/12659/2017-tesla-model%203-front_12659_032_640x480_ppsw.png"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard key={this.props.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
