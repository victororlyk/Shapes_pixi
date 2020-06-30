import { app } from '../index';
import { gravity, shapes } from '@View/shape.views';
import { Circle, Ellipse, Polygon, RectangleShape, Triangle } from '@Models/shape.model';

export const figures = [Triangle, RectangleShape, Circle, Polygon, Ellipse];

export function handleCreateShape(x: number, y: number) {
  const randomIndex = Math.floor(Math.random() * (figures.length));
  const id = Date.now().toString();
  const shape = new figures[randomIndex](x, y, id);

  function deleteItem(this: any) {
    app.stage.removeChild(shape);
    const deleteIndex = shapes.findIndex((shape: any) => shape.id === this.id);
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
    if (shapes[i]?.y > 600) {
      app.stage.removeChild(shapes[i]);
      shapes.splice(i, 1);
    }
  }
}
