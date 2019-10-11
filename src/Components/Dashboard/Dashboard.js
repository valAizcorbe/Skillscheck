import React from "react";
import Product from "../Product/Product";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  render() {
    let mappedProducts = this.state.inventory.map((element, index) => {
      return <Product element={element} index={index} />;
    });
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default Dashboard;
