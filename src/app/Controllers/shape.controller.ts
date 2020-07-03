import {  CircleModel, EllipseModel, PolygonModel, RectangleModel, TriangleModel} from '@app/Models/';
import ShapeModel from '@app/Models/shape.model';
import { gravity } from '@app/View/shape.views';
import { APP_HEIGHT } from '@app/constants';
import { ShapeModelsType } from '@app/types';

export const models = [  CircleModel, EllipseModel, PolygonModel, RectangleModel, TriangleModel];

export function handleCreateShape(x: number, y: number) {
  const randomIndex = Math.floor(Math.random() * (models.length));
  const id = Date.now().toString();
  const shape = new models[randomIndex](x, y, id);

  function deleteItem(this: ShapeModelsType) {
    ShapeModel.deleteInstance('byInstance', this);
    const sameShapes = ShapeModel.instances.filter((shape: ShapeModelsType) => shape.square === this.square && shape.id !== this.id);
    sameShapes.forEach((shape: ShapeModelsType) => {
      // deleting old shapes and creating new shapes of the same shape and same functionality
      const { x, y, id } = shape;
      ShapeModel.deleteInstance('byInstance', shape)
      const index = models.findIndex((shapeModel: any) => shape.constructor.name === shapeModel.name);
      const newShape = new models[index](x, y, id);
      newShape.on('mousedown', (e: MouseEvent) => {
        e.stopPropagation();
        deleteItem.call(newShape);
      });
    });
  }

  shape.on('mousedown', (e: MouseEvent) => {
    e.stopPropagation();
    deleteItem.call(shape);
  });
}

export function updateShapes() {
  for (const shape of ShapeModel.instances) {
    shape.y += gravity;
  }
  const shapesLength = ShapeModel.instances.length;
  for (let i = 0; i <= shapesLength; i++) {
    if (ShapeModel.instances[i]?.y > APP_HEIGHT) {
      ShapeModel.deleteInstance('byIndex', i);
    }
  }
}
