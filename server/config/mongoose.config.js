const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tasks", { usesNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("***** Established a connecteion to the databse! *****"))
  .catch(err => console.log("Something went wrong when connecting to the database", err))