import IdFactory from "../src/Utilities/IdFactory";
import Game from "../src/game";
const idFactory = new IdFactory();
class GameManager {
  constructor(public games: Game[] = []) {
    idFactory.resetCounter();
    this.games = games;
    for (const game of this.games)
      game.ID = idFactory.getNewId();
  }

  addGame(game: Game) {
    game.ID = idFactory.getNewId();
    this.games.push(game);
  }
}

export default GameManager;