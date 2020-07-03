import ShapeModel from '@app/Models/shape.model';
import { ShapeModelsType } from '@app/types';

export let shapesPerSec = 1;
export let gravity = 1;
export let shapesNumber = ShapeModel.instances.length;
export let areaOccupied = 0;

//displaying gravity and shapes per Second amount
const ShapesPerSecSpan = document.querySelector('.shapes_number span') as HTMLSpanElement;
ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
const GravitySpan = document.querySelector('.gravity__number span') as HTMLSpanElement;
GravitySpan!.innerHTML = gravity.toString();

//controls buttons
const decreaseShapesBtn = document.querySelector('.shapes__btns--decrease') as HTMLButtonElement;
const increaseShapesBtn = document.querySelector('.shapes__btns--increase') as HTMLButtonElement;
decreaseShapesBtn!.addEventListener('click', changeAmount('shapesPerSec', -1, ShapesPerSecSpan));
increaseShapesBtn!.addEventListener('click', changeAmount('shapesPerSec', 1, ShapesPerSecSpan));
const decreaseGravityBtn = document.querySelector('.gravity__btns--decrease') as HTMLButtonElement;
const increaseGravityBtn = document.querySelector('.gravity__btns--increase') as HTMLButtonElement;
decreaseGravityBtn!.addEventListener('click', changeAmount('gravity', -1, GravitySpan));
increaseGravityBtn!.addEventListener('click', changeAmount('gravity', 1, GravitySpan));


// displaying calculated info of shapes and area covered
const ShapesNumberSpan = document.querySelector('.info__shapes span');
ShapesNumberSpan!.innerHTML = shapesNumber.toString();
const AreaNumberSpan = document.querySelector('.info_area span');
AreaNumberSpan!.innerHTML = areaOccupied.toString();

// function to control gravity and shapes per second
function changeAmount(name: string, value: number, display: Element | null) {
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

// function to update displayed info of calculated shapes and area covered
export function updateInfo() {
  shapesNumber = ShapeModel.instances.length;
  ShapesNumberSpan!.innerHTML = shapesNumber.toString();
  areaOccupied = ShapeModel.instances.reduce((acc:number, shape:ShapeModelsType) => acc + shape.square, 0);
  AreaNumberSpan!.innerHTML = areaOccupied.toFixed(2).toString();
}
