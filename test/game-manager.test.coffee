{ Game } = require "../src/game"
{ Manager } = require "../src/gameManager"
{getNewId, resetCounter} = require "../src/Utilities/IdFactory"

chai = require "chai"
chai.should()

describe "Game Manager", ->
  describe "The basic object", ->
    describe "Default Properties", ->
      manager = new Manager()
      it "should have an empty game array", (done) ->
        manager.games.should.eql []
        done()

    it "should contain the single game passed in to the ctor -with an id added", (done) ->
      done()

    it "should contain all the games passed in to the ctor -with an incremental id added to each one", (done) ->
      done()

    describe "Adding a game", ->
      manager = new Manager()
      it "should contain the new game after adding it using the method", (done)->
        resetCounter()
        game = new Game(20, 100, [{name:"first"}, {name:"second"}])
        manager.addGame(game)
        manager.games.length.should.eql 1
        manager.games[0].should.eql game
        manager.games[0].ID.should.eql 1
        done()