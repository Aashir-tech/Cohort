// const express = require('express');

const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello World! how are you')
})

app.listen(port , () => {
    console.log("Example port listening on 3000")
})