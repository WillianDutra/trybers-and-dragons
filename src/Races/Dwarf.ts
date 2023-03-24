import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addRace();
  }

  private static addRace(): void {
    Dwarf._raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}