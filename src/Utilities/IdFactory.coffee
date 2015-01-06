idCounter = 0;

getNewId = ()->
  ++idCounter

resetCounter = ()->
  idCounter = 0

exports.getNewId = getNewId
exports.resetCounter = resetCounter
