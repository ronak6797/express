const { User } = require("../Models/user.model");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

function createUser(req, res) {
  console.log(">>>req", req.body);
  User.create(req.body)
    .then(() => {
      res.status(201).send("Succesffully created!!");
    })
    .catch((err) => {
      res.status(500).json({ Message: err });
    });
}

function getUser(req, res) {
  User.find({})
    .then((response) => {
      res.status(200).json(response);
      console.log("order.controller.js working");  
    })
    .catch((err) => {
      res.status(500).json({ Message: "Something! Went Wrong", error: err });
    });
}

module.exports = { getUser, createUser };