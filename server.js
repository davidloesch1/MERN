const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require('./routes/api/items')
require("dotenv").config();

//initialize app
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

//DB configuration
const db = require("./config/keys").mongoURI;

//Set mongoose settings
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

//connect to mongo using mongoose
mongoose
  .connect(db)
  .then(() => console.log("mongo is connected"))
  .catch((err) => console.log(err));

//Routes
app.use('/api/items', items)


const port = process.env.PORT | 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
