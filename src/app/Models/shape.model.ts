import { Graphics } from 'pixi.js';
import { app } from '@app/index';
import { ShapeModelsType } from '@app/types';

export default class ShapeModel extends Graphics {
  id: string;
  square: number;
  static instances: ShapeModelsType[] = [];

  constructor(x: number, y: number, id: string) {
    super();
    this.id = id;
    this.x = x;
    this.y = y;
    this.interactive = true;
    this.buttonMode = true;
    this.square = 0;
    ShapeModel.addInstance(this);
  }

  static addInstance(instance: ShapeModelsType) {
    app.stage.addChild(instance);
    ShapeModel.instances.push(instance);
  }

  static deleteInstance(option: string, instance: ShapeModelsType | number) {
    if (option === 'byIndex' && typeof instance === 'number') {
      app.stage.removeChild(ShapeModel.instances[instance]);
      ShapeModel.instances.splice(instance, 1);
    } else if (option === 'byInstance' && typeof instance !== 'number') {
      app.stage.removeChild(instance);
      const deleteIndex = ShapeModel.instances.findIndex((shape: ShapeModelsType) => shape.id === instance.id);
      ShapeModel.instances.splice(deleteIndex, 1);

    }
  }
}
