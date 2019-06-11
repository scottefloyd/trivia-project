"use strict";
const express = require("express");
const trivia = express.Router();
const pool = require("./connection");


function selectAll(res) {
  pool
    .query("select * from Questions")
    .then(result => res.json(shuffle(result.rows)));
}

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array.slice(0, 10);
}

trivia.get("/questions", (req, res) => {
  
  selectAll(res);
});


module.exports = trivia;