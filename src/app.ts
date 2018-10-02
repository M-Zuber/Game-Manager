import Game from "./game";
import Manager from "../src/gameManager";
const gameOne = new Game(10, 20, []);
const gameTwo = new Game(10, 20, []);

const manager = new Manager([gameOne, gameTwo]);

console.log(manager.games);