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

  removeGame(game: Game | number) {
    let gameIndex = -1;
    if (typeof game === "number") {
      const match = this.games.filter(g => g.ID === game);
      if (match.length !== 1) {
        return;
      }
      gameIndex = this.games.indexOf(match[0]);
    } else {
      gameIndex = this.games.indexOf(game);
    }
    if (gameIndex > -1) {
      this.games.splice(gameIndex, 1);
    }
  }

  displayGame(id: number) {
    const game =this.games.find(g => g.ID === id);
    if (game) {
      return game.display;
    }
    
    return "";
  }

  displayGames() {
    return this.games.map(g => g.display).join('\n').trim();
  }
}

export default GameManager;