const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/test_db3?retryWrites=true&w=majority');

const User = mongoose.model('Users', { username: String , email : String, password : String});

app.post('/signup' , async function(req,res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  const existingUser = await User.findOne({username: username})

  if(existingUser) {
    res.status(400).send("Username already exists")
  }

  const user = new User({
    username: username ,
    email: email,
    password: password
  });

  await user.save();
  res.json({
    msg : "User created Successfully"
  })
})

app.listen(3000)

