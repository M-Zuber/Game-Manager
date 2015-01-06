{getNewId, resetCounter} = require "../src/Utilities/IdFactory"
{Game} = require "../src/game"

class GameManager
  constructor: (@games = []) ->
    resetCounter()
    for key, game of @games
      game.ID = getNewId()
    
  addGame: (game)->
    game.ID = getNewId()
    @games.push(game)

exports.Manager = GameManager