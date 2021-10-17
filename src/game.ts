interface Player {
  name: string;
}
class Game {
  constructor(public cost: number = 10, public winnings: number = 0, public players: Player[] = []) { 
  }
  public ID: number;
  get netWinnings() {
    return this.winnings - this.cost;
  }

  get winningsPerPlayer() {
    return this.netWinnings / (this.players.length || 1);
  }

  get display() {
    return `Cost: ${this.cost}. Winnings: ${this.winnings}. Net: ${this.netWinnings}`;
  }
}
export default Game;