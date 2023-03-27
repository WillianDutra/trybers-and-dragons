import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints = 999;

  get lifePoints(): number { return this._lifePoints; }
}