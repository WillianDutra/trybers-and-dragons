import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.addArchetype();
  }

  private static addArchetype(): void {
    Warrior._archetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}