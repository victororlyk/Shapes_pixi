import { ShapeModelsType } from '@app/types';

export const shapes: ShapeModelsType[] = [];
export let shapesPerSec = 1;
export let gravity = 1;
export let shapesNumber = shapes.length;
export let areaOccupied = 0;

export function changeAmount(name: string, value: number, display: Element | null) {
  return function() {
    if (name === 'shapesPerSec') {
      decreaseShapesBtn.disabled = shapesPerSec + value === 0;
      shapesPerSec += value;
      display!.innerHTML = shapesPerSec.toString();
    } else if (name === 'gravity') {
      decreaseGravityBtn.disabled = gravity + value === 0;
      gravity += value;
      display!.innerHTML = gravity.toString();
    }
  };
}

const ShapesPerSecSpan = document.querySelector('.shapes_number span');
ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
const decreaseShapesBtn = document.querySelector('.shapes__btns--decrease') as HTMLButtonElement;
const increaseShapesBtn = document.querySelector('.shapes__btns--increase') as HTMLButtonElement;
decreaseShapesBtn!.addEventListener('click', changeAmount('shapesPerSec', -1, ShapesPerSecSpan));
increaseShapesBtn!.addEventListener('click', changeAmount('shapesPerSec', 1, ShapesPerSecSpan));

const GravitySpan = document.querySelector('.gravity__number span');
GravitySpan!.innerHTML = gravity.toString();
const decreaseGravityBtn = document.querySelector('.gravity__btns--decrease') as HTMLButtonElement;
const increaseGravityBtn = document.querySelector('.gravity__btns--increase') as HTMLButtonElement;
decreaseGravityBtn!.addEventListener('click', changeAmount('gravity', -1, GravitySpan));
increaseGravityBtn!.addEventListener('click', changeAmount('gravity', 1, GravitySpan));

const ShapesNumberSpan = document.querySelector('.info__shapes span');
ShapesNumberSpan!.innerHTML = shapesNumber.toString();

const AreaNumberSpan = document.querySelector('.info_area span');
AreaNumberSpan!.innerHTML = areaOccupied.toString();

export function updateInfo() {
  shapesNumber = shapes.length;
  ShapesNumberSpan!.innerHTML = shapesNumber.toString();
  areaOccupied = shapes.reduce((acc, shape) => acc + shape.square, 0);
  AreaNumberSpan!.innerHTML = areaOccupied.toFixed(2).toString();
}
