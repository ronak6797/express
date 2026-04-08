var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
})

userSchema.pre("save", function(next){
        this.name = this.name.trim();
        next();
});

const User = mongoose.model("User", userSchema);
module.exports = { User };