import { Graphics, Texture, Circle } from 'pixi.js';

export default class ShapeModel extends Graphics {
  shape: string;

  constructor(x: number, y: number, shape: string, ...args: any[]) {
    super()
    this.shape = shape;
    this.x = x
    this.y = y
    this.interactive = true
    this.buttonMode = true
    switch (this.shape) {
      case 'circle':
        this.beginFill(0x9966FF);
        this.drawCircle(0, 0, 32);
        this.endFill();
        break;
      case 'ellipse':
        this.beginFill(0xFFFF00);
        this.drawEllipse(0, 0, 50, 20);
        this.endFill();
        break
      case 'rectangle':
        this.lineStyle(4, 0xFF3300, 1);
        this.beginFill(0x66CCFF);
        this.drawRect(0, 0, 64, 64);
        this.endFill();
        break;
      case 'triangle':
        this.beginFill(0x66FF33);
        this.drawPolygon([
          -32, 64,             //First point
          32, 64,              //Second point
          0, 0                 //Third point
        ]);
        this.endFill();
        break;
      case 'pentagon':
        break;
        //i think this is a lot of shapes
      case 'Polygons':
        break;
    }
  }

}


export const circle = new Circle(100, 300, 50)
