var mongoose = require("mongoose");

function dbConfig() {
return mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to db");  
})
.catch((err) => {
    console.log(err);   
})
}

module.exports = { dbConfig };