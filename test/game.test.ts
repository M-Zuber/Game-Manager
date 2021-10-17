import Game from "../src/game";
const chai = require("chai");
chai.should();

describe("The Game object", () => {
  describe("Defaults", () => {
    const game = new Game();
    
    it("should return the default cost", (done) => {
      game.cost.should.eql(10)
      done()
    })
    it("should return the default winnings", (done) => {
      game.winnings.should.eql(0)
      done()
    })
    it("should return the default players array", (done) => {
      game.players.should.eql([])
      done()
    })
  })
  describe("With Paramters", () => {
    const game = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
    
    it("should return the cost given", (done) => {
      game.cost.should.eql(20)
      done()
    })
    it("should return the winnings given", (done) => {
      game.winnings.should.eql(100)
      done()
    })
    it("should return the players array given", (done) => {
      game.players.should.eql([{ name: "first" }, { name: "second" }])
      done()
    })
  })

  describe("Actions", () => {
    const game = new Game(10, 100, [{ name: "first" }, { name: "second" }])

    it("should return the correct net winnings", (done) => {
      game.netWinnings.should.eql(90)
      done()
    })
    it("should return the correct winnings per player", (done) => {
      game.winningsPerPlayer.should.eql(45)
      done()
    })
    it("should return the correct winnings per player -even with an empty players array", (done) => {
      game.setPlayers([]);
      game.winningsPerPlayer.should.eql(90)
      done()
    })
  })

  describe("Display", () => {
    const game = new Game(10, 100, [{ name: "first" }, { name: "second" }])
    
    it("should output the desired string", (done) => {
      game.display.should.eql("Cost: 10. Winnings: 100. Net: 90");
      done();
    });
  });

  describe("Editing", () => {
    it("Allows setting a value for the amount won", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }]);
      game.setWinnings(500);
      game.Winnings.should.eql(500);
      done();
    });

    it("Allows rewritting the players array", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }]);
      game.setPlayers([{ name: "Testing" }, { name: "Things" }]);
      game.Players.should.deep.eq([{ name: "Testing" }, { name: "Things" }]);
      done();
    });

    it("Editing the value returned by the Players getter does not affect the actual players list", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }]);
      game.Players[0].name = "Should not work";
      game.Players.should.deep.eq([{ name: "first" }, { name: "second" }]);
      done();
    });

    it("Allows adding a new player", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }]);
      game.addPlayer({ name: "Testing" });
      game.Players.should.deep.eq([{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      done();
    });

    it("Allows removing a player by index", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      game.removePlayer(1);
      game.Players.should.deep.eq([{ name: "first" }, { name: "Testing" }]);
      done();
    });

    it("Allows removing a player by object", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      game.removePlayer({ name: "Testing" });
      game.Players.should.deep.eq([{ name: "first" }, { name: "second" }]);
      done();
    });

    it("Allows removing a player by index - does nothing if player not found", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      game.removePlayer(6);
      game.Players.should.deep.eq([{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      done();
    });

    it("Allows removing a player by object - does nothing if player not found", (done) => {
      const game = new Game(10, 100, [{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      game.removePlayer({ name: "They are not here" });
      game.Players.should.deep.eq([{ name: "first" }, { name: "second" }, { name: "Testing" }]);
      done();
    });
  });
});