import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Ranger.addArchetype();
  }

  private static addArchetype(): void {
    Ranger._archetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}