import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {  
  public p1: Fighter;
  public p2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.p1 = player1;
    this.p2 = player2;
  }

  fight(): number {
    while (this.p1.lifePoints !== -1 && this.p2.lifePoints !== -1) {
      this.p1.attack(this.p2);
      this.p2.attack(this.p1);
    }

    return super.fight();
  }
}