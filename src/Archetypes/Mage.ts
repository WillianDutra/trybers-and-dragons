import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Mage.addArchetype();
  }

  private static addArchetype(): void {
    Mage._archetypeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._archetypeCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}