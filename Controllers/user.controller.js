const { User } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createUser(req, res) {
  User.create(req.body)
  .then(() => {
      res
      .status(201)
      .send("Succesffully created!!");
    }).catch((err) => {
      console.log(err);
      res
      .status(500)
      .json({error: err.message});
    });
}

function getUser(req, res) {
  User.find({})
    .then((response) => {
      res
      .status(200)
      .json(response);
    })
    .catch((err) => {
      res
      .status(500)
      .json({ Message: "Something! Went Wrong", error: err });
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

async function login(req, res) {
  try {
    let { password, email } = req.body;
    const user = await User.findOne({ email: email });
    if(!(user && (await bcrypt.compare(password, user.password)))){
      res.json({ Message: "Email or Password doesn't match" })
    }
    const token = await jwt.sign(
      {id: user._id}, 
      process.env.JWT_SECRET_KEY
    )
    res.cookie("token", token)
    console.log(token);
    res.status(200).json({Message: token})
  } catch(err) {
    res.status(500).json({Message: err})
  }
}
module.exports = { getUser, createUser, getUserById, updateById, login};