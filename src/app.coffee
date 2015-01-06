{ Game } = require "./game"
{ Manager } = require "../src/gameManager"
gameOne = new Game(10, 20, [])
gameTwo = new Game(10, 20, [])

manager = new Manager([gameOne, gameTwo])

console.log manager.games