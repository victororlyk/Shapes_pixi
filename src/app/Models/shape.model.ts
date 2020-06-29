import { Sprite, Texture } from 'pixi.js';

export default class ShapeModel extends Sprite {
  shape: string;

  constructor(x: number, y: number, texture: Texture, shape: string) {
    super(texture)
    this.shape = shape;
    this.anchor.set(0.5)
    this.x = x
    this.y = y
  }
}
