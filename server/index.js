const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const Restaurant = require("./models/restaurant");
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());


// database connection
mongoose.connect(
   "mongodb+srv://forang:forang@slash1.rmfxlsl.mongodb.net/?retryWrites=true&w=majority", 
    { useNewUrlParser: true, 
    },
    () => console.log("MongoDB connection successful!")
  );

// endpoints
app.get('/', function (req, res) {
  res.send('we live?')
})

// get restaurant data
app.get("/restaurants", (req, res) => {
  //get data from mongodb and pass it to view
  Restaurant.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

// new restaurant data
app.post("/newrestaurant", async (req, res) => {
  
  const post = new Restaurant({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating
  });
  
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
  }; 
});


// port
app.listen(3001, () => {
    console.log("listening on 3001");
  });