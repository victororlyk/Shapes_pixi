import { Graphics } from 'pixi.js';
import {getRandomColor} from '../utils'

export default class ShapeModel extends Graphics {
  shape: string;
  id: string;

  constructor(x: number, y: number, shape: string, id: string, ) {
    super();
    this.id = id;
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    switch (this.shape) {
      case 'circle':
        this.beginFill(getRandomColor());
        this.drawCircle(0, 0, 32);
        this.endFill();
        break;
      case 'ellipse':
        this.beginFill(getRandomColor());
        this.drawEllipse(0, 0, 50, 20);
        this.endFill();
        break;
      case 'rectangle':
        this.lineStyle(4, getRandomColor(), 1);
        this.beginFill(getRandomColor());
        this.drawRect(0, 0, 64, 64);
        this.endFill();
        break;
      case 'triangle':
        this.beginFill(getRandomColor());
        this.drawPolygon([
          -32, 64,
          32, 64,
          0, 0
        ]);
        this.endFill();
        break;
      case 'pentagon':
        let  size = 50,
          Xcenter = 100,
          Ycenter = 100,
        sides = 5

        this.lineStyle(4, getRandomColor(), 1);
        this.moveTo(0, 0);

        this.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));

        for (let i = 1; i <= sides; i += 1) {
          this.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / sides), Ycenter + size * Math.sin(i * 2 * Math.PI / sides));
        }
        break;
      case 'random':
        let  sizeR = 50,
          XcenterR = 25,
          YcenterR = 25,
          sidesR = Math.floor(Math.random() * (10 - 6 + 1) + 6);

        this.lineStyle(4, getRandomColor(), 1);
        this.moveTo(0, 0);

        this.moveTo(XcenterR + sizeR * Math.cos(0), YcenterR + sizeR * Math.sin(0));

        for (let i = 1; i <= sidesR; i += 1) {
          this.lineTo(XcenterR + sizeR * Math.cos(i * 2 * Math.PI / sidesR), YcenterR + sizeR * Math.sin(i * 2 * Math.PI / sidesR));
        }
        break;
    }
  }

}
