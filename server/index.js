require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  ctrl = require("./../server/controller");

app = express();
app.use(express.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, console.log(`Running on Port: ${SERVER_PORT}`));
    console.log("It worked!!! Woohoo!!!");
  })
  .catch(err => console.log(err));

app.get("/api/inventory", ctrl.getInventory);
app.post("/api/product", ctrl.createProduct);
app.delete("/api/product/:id", ctrl.deleteProduct);
app.put("/api/product/:id", ctrl.updateProduct);
