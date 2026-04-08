var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer")
var cors = require("cors")
var dotenv = require("dotenv")
var path = require("path");
const { userRouter } = require("./Routers/user.router");
const { orderRouter } = require("./Routers/order.router");
const { dbConfig } = require("./Configuration/db.config");
const morgan = require("morgan");

dotenv.config();

app.use(cors())
app.use(express.json());
app.use(morgan("short"))
app.use(express.urlencoded({extended: true}))
app.use(multer().array())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


app.use("/api/user", userRouter)
app.use("/api/order", orderRouter)

dbConfig().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
  });
});