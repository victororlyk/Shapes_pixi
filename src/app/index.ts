import { Application, Rectangle } from 'pixi.js';
import { handleCreateShape, updateShapes } from '@app/Controllers/shape.controller';
import { shapesPerSec, updateInfo } from '@app/View/shape.views';
import { APP_HEIGHT, APP_WIDTH } from '@app/constants';

export const app = new Application({
  height: APP_HEIGHT,
  backgroundColor: 0xAAAAAA
});

//adding ability to create shapes on container clicking
app.stage.hitArea = new Rectangle(0, 0, APP_WIDTH, APP_HEIGHT);
document.getElementById('game')!.appendChild(app.view);
app.stage.interactive = true;
app.stage.buttonMode = true;
app.stage.on('mousedown', (e: any) => {
  handleCreateShape(e.data.global.x, e.data.global.y);
});

// creating different amount of shapes thought one second
window.setInterval(function() {
  for (let i = 0; i < shapesPerSec; i++) {
    handleCreateShape(Math.floor(Math.random() * APP_WIDTH) + 1, -80);
  }
}, 1000);

function gameLoop() {
  updateShapes();
  updateInfo();
}

app.ticker.add(gameLoop);
