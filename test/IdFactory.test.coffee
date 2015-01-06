{getNewId, resetCounter} = require "../src/Utilities/IdFactory"
chai = require "chai"
chai.should()

describe "The Id factory for games", ->
  it "should return 1 on the first call", (done)->
    getNewId().should.eql 1
    done()
  it "should return 2 if called for the second time -even from another function", (done)->
    getNewId().should.eql  2
    done()
  it "should increment", (done)->
    getNewId().should.eql 3
    getNewId().should.eql 4
    done()
  it "should return 1 if called after being reset", (done)->
    resetCounter()
    getNewId().should.eql 1
    done()