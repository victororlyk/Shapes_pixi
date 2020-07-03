import { getRandomColor } from '@app/utils';
import ShapeModel from '@app/Models/shape.model';

export default class RectangleModel extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.lineStyle(4, getRandomColor(), 1);
    this.beginFill(getRandomColor());
    this.drawRect(0, 0, 64, 64);
    this.endFill();
    this.square = 64 * 64;
  }
}

