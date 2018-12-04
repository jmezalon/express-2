const express = require('express');
const http = require('http')

const app = express()
const server = http.createServer(app)

app.get('/:move', (req, res) => {
  let userMove = req.params.move
  let allMoves = ["rock", "paper", "scissors"]
  let computerChoice = allMoves[Math.floor(Math.random() * 3)]

  if (userMove === computerChoice) {
    res.send({userMove: userMove, ai: computerChoice, result: "it's a tie"})
  } else if (userMove === 'rock' && computerChoice === 'paper' ) {
    res.send({userMove: userMove, ai: computerChoice, result: "the computer won"})
  } else if (userMove === 'paper' && computerChoice === 'scissors') {
    res.send({userMove: userMove, ai: computerChoice, result: "the computer won"})
  } else if (userMove === 'scissors' && computerChoice === 'rock') {
    res.send({userMove: userMove, ai: computerChoice, result: "the computer won"})
  } else if (userMove === 'paper' && userMove === 'rock') {
    res.send({userMove: userMove, ai: computerChoice, result: "the user won"})
  } else if (userMove === 'scissors' && computerChoice === 'paper') {
    res.send({userMove: userMove, ai: computerChoice, result: "the user won"})
  } else if (userMove === 'rock' && computerChoice === 'scissors') {
    res.send({userMove: userMove, ai: computerChoice, result: "the user won"})
  }

})


app.listen(3000, (req, res) => {
  console.log('SERVER LISTENING ON localhost:3000')
})
