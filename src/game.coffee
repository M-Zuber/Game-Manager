class Game
  constructor: (@cost = 10, @winnings = 0, @players = []) ->
  netWinnings: () ->
    @winnings - @cost
  winningsPerPlayer: () ->
    @netWinnings() / (@players.length || 1)
exports.Game = Game