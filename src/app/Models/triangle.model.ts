import { getRandomColor } from '@app/utils';
import ShapeModel from '@app/Models/shape.model';

export default class TriangleModel extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.beginFill(getRandomColor());
    this.drawPolygon([
      -32, 64,
      32, 64,
      0, 0
    ]);
    this.endFill();
    this.square = (64 * 64) / 2;
  }
}
