import Game from "../src/game";
const chai = require("chai");
chai.should();

describe( "The Game object",() => {
  describe( "Defaults",() => {
    const game = new Game();
    
    it( "should return the default cost", (done) =>{
      game.cost.should.eql( 10)
      done()
    })
    it( "should return the default winnings", (done) =>{
      game.winnings.should.eql( 0)
      done()
    })
    it( "should return the default players array", (done) =>{
      game.players.should.eql( [])
      done()
    })
  })
  describe( "With Paramters",() =>{
    const game = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
    
    it( "should return the cost given", (done) =>{
      game.cost.should.eql( 20)
      done()
    })
    it( "should return the winnings given", (done) =>{
      game.winnings.should.eql( 100)
      done()
    })
    it( "should return the players array given", (done) =>{
      game.players.should.eql( [{name: "first"}, {name: "second"}])
      done()
    })
  })

  describe( "Actions",() =>{
    const game = new Game(10, 100, [{name: "first"}, {name: "second"}])

    it( "should return the correct net winnings", (done) =>{
      game.netWinnings.should.eql( 90)
      done()
    })
    it( "should return the correct winnings per player", (done) =>{
      game.winningsPerPlayer.should.eql( 45)
      done()
    })
    it( "should return the correct winnings per player -even with an empty players array", (done) =>{
      game.players = []
      game.winningsPerPlayer.should.eql( 90)
      done()
    })
  })
})