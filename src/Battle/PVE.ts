import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public p1: Fighter;
  public monsters: SimpleFighter[];
  public numMonsters: number;

  constructor(p1: Fighter, monsters: SimpleFighter[]) {
    super(p1);
    this.p1 = p1;
    this.monsters = monsters;
    this.numMonsters = (this.monsters.length - 1);
  }

  fight(): number {
    while (
      this.p1.lifePoints !== -1
      && this.monsters[this.numMonsters].lifePoints !== -1) {
      const selectedMonster = this.monsters
        .find((monster) => monster.lifePoints !== -1);
      this.p1.attack(selectedMonster || this.monsters[0]);
      this.monsters.forEach((monster) => monster.attack(this.p1));
    }

    return super.fight();
  }
}