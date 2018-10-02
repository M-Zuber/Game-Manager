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
    const manager = new Manager()
    it( "should contain the new game after adding it using the method", (done)=>{
      idFactory.resetCounter()
      const game = new Game(20, 100, [{name:"first"}, {name:"second"}])
      manager.addGame(game)
      manager.games.length.should.eql( 1)
      manager.games[0].should.eql( game)
      manager.games[0].ID.should.eql( 1)
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
      manager.games[0].should.eql(gameTwo);
      manager.games.length.should.eql(1);
      done();
    });
    it('Does nothing if the game object passed does not exist in the list of games', (done) => {
      const gameOne = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const gameTwo = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const gameThree = new Game(20, 100, [{ name: "first" }, { name: "second" }]);
      const manager = new Manager([gameOne, gameTwo]);
      manager.removeGame(gameThree);
      console.log(manager.games)
      manager.games[0].should.eql(gameOne);
      manager.games[1].should.eql(gameTwo);
      manager.games.length.should.eql(2);
      done();
    });
  });
})