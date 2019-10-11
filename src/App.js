import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Product/Product";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />
    </div>
  );
}

export default App;
