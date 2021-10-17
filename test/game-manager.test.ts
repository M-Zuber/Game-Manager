import Game from "../src/game";
import Manager from "../src/gameManager";
import IdFactory from "../src/Utilities/IdFactory";
const chai = require("chai");
chai.should();

const idFactory = new IdFactory();
describe( "Game Manager",() =>{
  describe( "The basic object",() =>{
    describe( "Default Properties",() =>{
      const manager = new Manager()
      it( "should have an empty game array", (done) =>{
        manager.games.should.eql( [])
        done()
      })
    })

    it( "should contain the single game passed in to the ctor -with an id added", (done) =>{
      done()
    })

    it( "should contain all the games passed in to the ctor -with an incremental id added to each one", (done) =>{
      done()
    })
  })

  describe( "Adding a game",() =>{
    it( "should contain the new game after adding it using the method", (done)=>{
      const manager = new Manager()
      idFactory.resetCounter()
      const game = new Game(20, 100, [{name:"first"}, {name:"second"}])
      manager.addGame(game)
      manager.games.length.should.eql( 1)
      manager.games[0].should.deep.eq(game)
      
      done()
    })
  })

  describe('Removing a game', () => {
    it('Removes the game with the given id', (done) => {
      const gameOne = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const manager = new Manager([gameOne, new Game(20, 100, [{ name: "first" }, { name: "second" }])])
      manager.removeGame(2);
      manager.games[0].should.eql(gameOne);
      manager.games.length.should.eql(1);
      done();
    });
    it('Does nothing if the id does not exist', (done) => {
      const manager = new Manager([new Game(20, 100, [{ name: "first" }, { name: "second" }]), new Game(20, 100, [{ name: "first" }, { name: "second" }])])
      manager.removeGame(3);
      manager.games.length.should.eql(2);
      done();
    });
    it('Removes the game object passed in', (done) => {
      const gameOne = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const gameTwo = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const manager = new Manager([gameOne, gameTwo])
      manager.removeGame(gameOne);
      manager.games[0].should.deep.eq(gameTwo);
      manager.games.length.should.eql(1);
      done();
    });
    it('Does nothing if the game object passed does not exist in the list of games', (done) => {
      const gameOne = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const gameTwo = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const gameThree = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const manager = new Manager([gameOne, gameTwo]);
      manager.removeGame(gameThree);
      manager.games[0].should.deep.eq(gameOne);
      manager.games[1].should.deep.eq(gameTwo);
      manager.games.length.should.eql(2);
      done();
    });
  });

  describe("Display", () => {
    const gameOne = new Game(10, 100, [{ name: "first" }, { name: "second" }]);
    const gameTwo = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
    const gameThree = new Game(30, 100, [{ name: "first" }, { name: "second" }]);
    const manager = new Manager([gameOne, gameTwo, gameThree]);
    
    it("Should return the display for the game with the given id", (done) => {
      manager.displayGame(gameOne.ID).should.eql("Cost: 10. Winnings: 100. Net: 90");
      
      done();
    });

    it("Should return an empty string if the game is not found", (done) => {
      manager.displayGame(10).should.eql("");
      done();
    });

    it("Should display all games", (done) => {
      manager.displayGames().should.eql("Cost: 10. Winnings: 100. Net: 90\nCost: 20. Winnings: 100. Net: 80\nCost: 30. Winnings: 100. Net: 70");
      done();
    });
  });
})