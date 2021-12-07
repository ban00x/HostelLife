const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
// PROJECT IMPORTS
const webApi = require("./api.js");
const api = webApi();

//get new events
app.get("/events", api.getNewEvent);
//post new event
app.post(`/events`, api.postNewEvent);

app.listen(6000, () =>
  console.log("HostelLife Server is up and running on port 6000")
);
