import { Graphics } from 'pixi.js';
import { getRandomColor } from '../utils';

class ShapeModel extends Graphics {
  id: string;
  square: any;

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

export class Triangle extends ShapeModel {
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

export class RectangleShape extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.lineStyle(4, getRandomColor(), 1);
    this.beginFill(getRandomColor());
    this.drawRect(0, 0, 64, 64);
    this.endFill();
    this.square = 64 * 64;
  }
}

export class Circle extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.beginFill(getRandomColor());
    this.drawCircle(0, 0, 32);
    this.endFill();
    this.square = 3.142 * 32 ** 2;
  }
}

export class Ellipse extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    this.beginFill(getRandomColor());
    this.drawEllipse(0, 0, 50, 20);
    this.endFill();
    this.square = 3.142 * 50 * 20;
  }
}

export class Polygon extends ShapeModel {
  constructor(x: number, y: number, id: string) {
    super(x, y, id);
    let size = 50,
      Xcenter = 100,
      Ycenter = 100,
      sides = Math.floor(Math.random() * (10 - 5 + 1) + 5);

    this.lineStyle(4, getRandomColor(), 1);
    this.moveTo(0, 0);

    this.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

    for (let i = 1; i <= sides; i += 1) {
      this.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / sides), Ycenter + size * Math.sin(i * 2 * Math.PI / sides));
    }
    this.square = (1 / 2) * ((sides * 50) * (this.getBounds().width / 2));
  }
}
