var mongoose = require("mongoose");
var bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Kindly fill the Name!"],
        minLength: [3, "Name must be atleast of length 3"],
        maxLength: [50, "Name can't exceed 70"]
    },
    age: {
        type: Number,
        required: [true, "Kindly fill the Age!"],
        min: [18, "Kindly give the age between 18 to 70"],
        max: [70, "Age connot exceed 70"],
    },
    email: {
        type: String,
        required: [true, "Email can't be empty"],
        unique: true,
        lowercase: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please provide valide email address"]
    },
    role: {
        type: String,
        enum: ["ADMIN", "SUPER ADMIN", "STUDENT", "CONSULTANT"],
        default: "STUDENT",
        required: [true, "Kindly give the role"]
    },
    course: String,
    password: String
}) 

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 10)
});

const User = mongoose.model("User", userSchema);
module.exports = { User };