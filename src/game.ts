interface Player {
  name: string;
}
class Game {
  constructor(private cost: number = 10, private winnings: number = 0, private players: Player[] = []) { 
  }
  public ID: number;

  get Winnings() {
    return this.winnings;
  }

  get Cost() {
    return this.cost;
  }

  get Players() {
    return JSON.parse(JSON.stringify(this.players));
  }

  get netWinnings() {
    return this.winnings - this.cost;
  }

  get winningsPerPlayer() {
    return this.netWinnings / (this.players.length || 1);
  }

  get display() {
    return `Cost: ${this.cost}. Winnings: ${this.winnings}. Net: ${this.netWinnings}`;
  }

  setWinnings(amount: number) {
    this.winnings = amount;
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  removePlayer(player: Player | number) {
    if (typeof player === "number") {
      this.players.splice(player, 1);
    } else {
      const index = this.players.findIndex(p => p.name === player.name);
      if (index > -1) { 
        this.players.splice(index, 1);
      }
    }
  }
}
export default Game;