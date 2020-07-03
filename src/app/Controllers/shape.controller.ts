import { gravity, shapes } from '@app/View/shape.views';
import modelsShapes from '@app/Models/';
import { APP_HEIGHT } from '@app/constants';
import { ShapeModelsType } from '@app/types';
import { app } from '@app/index';


export const models = [modelsShapes.TriangleModel, modelsShapes.RectangleModel, modelsShapes.CircleModel, modelsShapes.PolygonModel, modelsShapes.EllipseModel];

export function handleCreateShape(x: number, y: number) {
  const randomIndex = Math.floor(Math.random() * (models.length));
  const id = Date.now().toString();
  const shape = new models[randomIndex](x, y, id);

  function deleteItem(this: ShapeModelsType) {
    app.stage.removeChild(shape);
    const deleteIndex = shapes.findIndex((shape: ShapeModelsType) => shape.id === this.id);
    shapes.splice(deleteIndex, 1);
  }

  shape.on('mousedown', (e: MouseEvent) => {
    e.stopPropagation();
    deleteItem.call(shape);
  });
  app.stage.addChild(shape);
  shapes.push(shape);
}

export function updateShapes() {
  for (const shape of shapes) {
    shape.y += gravity;
  }
  const shapesLength = shapes.length;
  for (let i = 0; i <= shapesLength; i++) {
    if (shapes[i]?.y > APP_HEIGHT) {
      app.stage.removeChild(shapes[i]);
      shapes.splice(i, 1);
    }
  }
}
