import { Graphics } from 'pixi.js';
import { getRandomColor } from '@app/utils';

export default class ShapeModel extends Graphics {
  id: string;
  square: number;

  constructor(x: number, y: number, id: string) {
    super();
    this.id = id;
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    this.square = 0;
  }
}
