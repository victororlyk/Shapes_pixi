import { Application } from 'pixi.js';
import ShapeModel from './Models/shape.model'

//shapes per second
let shapesPerSec = 1;
const ShapesPerSecSpan = document.querySelector('.shapes_number span')
ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
const decreaseShapesBtn = document.querySelector('.shapes__btns--decrease')
const increaseShapesBtn = document.querySelector('.shapes__btns--increase')
decreaseShapesBtn!.addEventListener('click', () => {
  shapesPerSec -= 1
  ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
})
increaseShapesBtn!.addEventListener('click', () => {
  shapesPerSec += 1
  ShapesPerSecSpan!.innerHTML = shapesPerSec.toString();
})

//gravity per second
let gravity = 1;
const GravitySpan = document.querySelector('.gravity__number span');
GravitySpan!.innerHTML = gravity.toString();
const decreaseGravityBtn = document.querySelector('.gravity__btns--decrease')
const increaseGravityBtn = document.querySelector('.gravity__btns--increase')
decreaseGravityBtn!.addEventListener('click', () => {
  gravity -= 1
  GravitySpan!.innerHTML = gravity.toString();
})
increaseGravityBtn!.addEventListener('click', () => {
  gravity += 1
  GravitySpan!.innerHTML = gravity.toString();
})

//number of shapes
const shapesNumber = 0;
const ShapesNumber = document.querySelector('.info__shapes span')
ShapesNumber!.innerHTML = shapesNumber.toString()

const areaOccupied = 0;
const AreaNumber = document.querySelector('.info_area span')
AreaNumber!.innerHTML = areaOccupied.toString()

const shapes: ShapeModel[] = []


//Pixi js
const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0xAAAAAA
})

function gameLoop(delta: number) {

}

function handleCreateShape() {
  const shape = new ShapeModel(100, 100, app.loader.resources['circle'].texture, 'circle')
  app.stage.addChild(shape)
  shapes.push(shape)
}

function handleDoneLoading() {
  handleCreateShape()
  app.ticker.add(gameLoop)
}

app.loader.baseUrl = 'assets/images'
app.loader
  .add('circle', 'circle.jpg')
  .add('elipse', 'elipse.png')
  .add('hexagon', 'hexagon.png')
  .add('square', 'square.png')
  .add('pentagon', 'pentagon.jpeg')
  .add('triangle', 'triangle.png')
app.loader.onComplete.add(handleDoneLoading)
app.loader.load()

document.getElementById('game')!.appendChild(app.view)
