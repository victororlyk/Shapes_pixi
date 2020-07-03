import { getRandomColor } from '@app/utils';
import ShapeModel from '@app/Models/shape.model';

export default class CircleModel extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.beginFill(getRandomColor());
    this.drawCircle(0, 0, 32);
    this.endFill();
    this.square = 3.142 * 32 ** 2;
  }
}

