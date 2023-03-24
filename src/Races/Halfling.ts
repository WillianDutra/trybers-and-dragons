import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addRace();
  }

  private static addRace(): void {
    Halfling._raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}