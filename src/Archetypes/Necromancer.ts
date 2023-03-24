import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.addArchetype();
  }

  private static addArchetype(): void {
    Necromancer._archetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}