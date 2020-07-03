import { getRandomColor } from '@app/utils';
import ShapeModel from '@app/Models/shape.model';

export default class PolygonModel extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    let size = 50,
      Xcenter = 10,
      Ycenter = -50,
      sides = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    this.beginFill(getRandomColor());
    this.lineStyle(4, getRandomColor(), 1);
    this.moveTo(0, 0);

    this.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (let i = 1; i <= sides; i += 1) {
      this.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / sides), Ycenter + size * Math.sin(i * 2 * Math.PI / sides));
    }
    this.endFill();
    this.square = (1 / 2) * ((sides * 50) * (this.getBounds().width / 2));
  }
}
