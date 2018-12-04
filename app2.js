const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)


app.get('/calc/add/:num1/:num2', (req, res) => {
  const {num1, num2} = req.params
  if (isNaN(num1) || isNaN(num2)) {
    res.send("try numbers only")
  }
  function add (n, m) {
    return n + m
  }
  res.send({ num1: num1, num2: num2, result: add(parseInt(num1), parseInt(num2))})
})
app.get('/calc/sub/:num1/:num2', (req, res) => {
  const {num1, num2} = req.params
  if (isNaN(num1) || isNaN(num2)) {
    res.send("try numbers only")
  }
  function sub (n, m) {
    return n - m
  }
  res.send({ num1: num1, num2: num2, result: sub(parseInt(num1), parseInt(num2))})
})
app.get('/calc/mul/:num1/:num2', (req, res) => {
  const {num1, num2} = req.params
  if (isNaN(num1) || isNaN(num2)) {
    res.send("try numbers only")
  }
  function mul(n, m) {
    return n * m
  }
  res.send({ num1: num1, num2: num2, result: mul(parseInt(num1), parseInt(num2))})
})

//
app.get('/calc/div/:num1/:num2', (req, res) => {
  const {num1, num2} = req.params
  if (isNaN(num1) || isNaN(num2)) {
    res.send("try numbers only")
  }
  function divide(n, m) {
    return n / m
  }
  res.send({ num1: num1, num2: num2, result: divide(parseInt(num1), parseInt(num2))})
})

app.get('/*', (req, res) => {
  res.send("this is a calculator api that can add, subract, multiply and divide. \n so if you follow calc with any of these route, i.e /add, /sub, /mul, /div follow by two integers \n in number format.  it will calculate the answer for you. \n give it a try. \n ex: localhost:8000/calc/add/3/2 \n you should get {'num1': 3, 'num2': '2', 'result': '5'}")
})


app.listen(8000, (req, res)=> {
  console.log('Server is LISTENING on localhost')
})
