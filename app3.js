const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/calc/:method/:num1/:num2', (req, res) => {
  const {method, num1, num2} = req.params;
  if(isNaN(num1) || isNaN(num2)) {
    res.send('only numbers')
  } else {
    if (method === 'add') {
      res.send({num1: num1, num2: num2, result: parseInt(num1) + parseInt(num2)})
    } else if (method === 'sub') {
      res.send({num1: num1, num2: num2, result: parseInt(num1) - parseInt(num2)})
    } else if (method === 'mul') {
      res.send({num1: num1, num2: num2, result: parseInt(num1) * parseInt(num2)})
    } else if (method === 'div') {
      res.send({num1: num1, num2: num2, result: parseInt(num1) / parseInt(num2)})
    } else {
      res.send("the operator is not supported")
    }
  }

})



app.listen(5000, (req, res) => {
  console.log("SERVER is LISTENING to localhost:5000")
})
