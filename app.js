const express = require("express");
const app = express();
const fs = require("fs");
const port = 80;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/userReg");
const nameSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  email: String,
  address: String,
});
const User = mongoose.model("User", nameSchema);

app.use('/static', express.static('static')); //For serving static file

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  // fs.writeFileSync('faisal.txt',JSON.stringify(myData));
  console.log(myData);
  myData.save()
    .then(item => {
      // res.sendFile(`${__dirname}/faisal.txt`);
      res.send("save to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

