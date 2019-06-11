"use strict";

const express = require("express");
const app = express();
const question_route = require("./question.api");
const score_route = require("./scores.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", score_route);
app.use("/api", question_route);


let port = 3000;
app.listen(port, () => console.log(`Server running on PORT: ${port}`)); 