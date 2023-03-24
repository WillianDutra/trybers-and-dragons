import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addRace();
  }

  private static addRace(): void {
    Elf._raceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf._raceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}