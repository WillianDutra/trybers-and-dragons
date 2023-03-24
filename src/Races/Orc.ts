import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.addRace();
  }

  private static addRace(): void {
    Orc._raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc._raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}