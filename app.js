let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

//APP CONFIG
mongoose.connect(
  "mongodb://localhost/blog_app",
  { useNewUrlParser: true }
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: { tpye: Date, default: Date.now }
});

//MONGOOSE MODEL CONFIG
var blog = mongoose.model("Blog", blogSchema);

app.listen(3000, function() {
  console.log("Server's up");
});
