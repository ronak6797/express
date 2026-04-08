//const { response } = require("express");
const { User } = require("../Models/user.model");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

function createUser(req, res) {
  console.log(">>>req", req.body);
  User.create(req.body)
    .then(() => {
      res
      .status(201)
      .send("Succesffully created!!");
    })
    .catch((err) => {
      console.log(err);
      res
      .status(500)
      .json({error: err.message});
    });
}

function getUser(req, res) {
  User.find({})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ Message: "Something! Went Wrong", error: err });
    });
}

function getUserById(req, res) {
  User.find({_id: req.params.id})
  .then((response) => {
    res
    .status(200)
    .json({Message: "User Fetched Successfully", data: response})
  }).catch((err) => {
    res
    .status(500)
    .json({Message: "User did not fetched succesfully", error: err})
  })
}

function updateById(req, res){
  User.findByIdAndUpdate(req.params.id, req.body)
  .then((response) => {
    res
    .status(200)
    .json({Message: "User updated succesfully", data: response})
  })
  .catch((err) => {
    res
    .status(500)
    .json({Message: "User did not updated succesfully", error: err})
  })
}
module.exports = { getUser, createUser, getUserById, updateById};