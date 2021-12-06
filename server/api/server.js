const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
// PROJECT IMPORTS
const webApi = require("./api.js");
const api = webApi();

app.get("/", (req, res) => {
  res.send("Hello Express");
});
//post new event
app.post(`/events`, api.postNewEvent);


app.listen(3000, () => console.log("HostelLife Server is up and running on port 3000"))
