import { getRandomColor } from '@app/utils';
import ShapeModel from '@app/Models/shape.model';

export default class EllipseModel extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.beginFill(getRandomColor());
    this.drawEllipse(0, 0, 50, 20);
    this.endFill();
    this.square = 3.142 * 50 * 20;
  }
}

