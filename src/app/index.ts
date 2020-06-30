import { Application } from 'pixi.js';
import ShapeModel from './Models/shape.model';

const figures = ['circle', 'ellipse', 'rectangle', 'triangle'];
let shapesPerSec = 1;
let gravity = 1;
const shapes: ShapeModel[] = [];
let shapesNumber = shapes.length;
let areaOccupied = 0;
//shapes per second

const ShapesPerSecSpan = document.querySelector('.shapes_number span');
ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
const decreaseShapesBtn = document.querySelector('.shapes__btns--decrease');
const increaseShapesBtn = document.querySelector('.shapes__btns--increase');
decreaseShapesBtn!.addEventListener('click', () => {
  shapesPerSec -= 1;
  ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
});
increaseShapesBtn!.addEventListener('click', () => {
  shapesPerSec += 1;
  ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
});

//gravity per second
const GravitySpan = document.querySelector('.gravity__number span');
GravitySpan!.innerHTML = gravity.toString();
const decreaseGravityBtn = document.querySelector('.gravity__btns--decrease');
const increaseGravityBtn = document.querySelector('.gravity__btns--increase');
decreaseGravityBtn!.addEventListener('click', () => {
  gravity -= 1;
  GravitySpan!.innerHTML = gravity.toString();
});
increaseGravityBtn!.addEventListener('click', () => {
  gravity += 1;
  GravitySpan!.innerHTML = gravity.toString();
});


//number of shapes
const ShapesNumberSpan = document.querySelector('.info__shapes span');
ShapesNumberSpan!.innerHTML = shapesNumber.toString();

const AreaNumberSpan = document.querySelector('.info_area span');
AreaNumberSpan!.innerHTML = areaOccupied.toString();


const app = new Application({
  backgroundColor: 0xAAAAAA
});
document.getElementById('game')!.appendChild(app.view);

window.setInterval(function() {
  console.log('here 1 second');
  for (let i = 0; i < shapesPerSec; i++) {
    handleCreateShape(Math.floor(Math.random() * 600) + 1, 10);
  }
}, 1000);

function gameLoop() {
  updateShape();
  shapesNumber = shapes.length;
  ShapesNumberSpan!.innerHTML = shapesNumber.toString();
}

function handleCreateShape(x: number, y: number) {
  const randomIndex = Math.floor(Math.random() * (3 + 1));
  const shape = new ShapeModel(x, y, figures[randomIndex]);
  app.stage.addChild(shape);
  shapes.push(shape);

}

function updateShape() {
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

app.ticker.add(gameLoop);


