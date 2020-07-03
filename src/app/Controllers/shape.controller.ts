import { gravity } from '@app/View/shape.views';
import modelsShapes from '@app/Models/';
import { APP_HEIGHT } from '@app/constants';
import { ShapeModelsType } from '@app/types';
import ShapeModel from '@app/Models/shape.model';


export const models = [modelsShapes.TriangleModel, modelsShapes.RectangleModel, modelsShapes.CircleModel, modelsShapes.PolygonModel, modelsShapes.EllipseModel];

export function handleCreateShape(x: number, y: number) {
  const randomIndex = Math.floor(Math.random() * (models.length));
  const id = Date.now().toString();
  const shape = new models[randomIndex](x, y, id);

  function deleteItem(this: ShapeModelsType) {
    ShapeModel.deleteInstance('byInstance', this);
    const sameShapes = ShapeModel.instances.filter((shape: ShapeModelsType) => shape.square === this.square && shape.id !== this.id);
    sameShapes.forEach((shape: ShapeModelsType) => {
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
