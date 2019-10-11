require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  controller = require("./../server/controller");

app = express();
app.use(express.json());

massive(CONNECTION_STRING).then();

app.listen(SERVER_PORT, () => {
  console.log(`Ole ole ole ${SERVER_PORT}`);
});
