import React from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  deleteUser = () => {
    axios
      .delete(`/api/product/${this.props.product.product_id}`)
      .then(res => {
        this.props.getInventory();
      })
      .catch(err => console.log(err));
  };

  render() {
    // let mappedProducts = this.state.inventory.map((element, index) => {
    //   return <Product element={element} index={index} />;
    // });
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default Dashboard;
