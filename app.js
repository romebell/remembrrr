const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const notes = require("./routes/api/notes");
const db = require('./config/keys').mongoURI;

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err))


app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/notes", notes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));