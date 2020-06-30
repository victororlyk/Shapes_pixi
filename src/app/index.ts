import { Application, Rectangle } from 'pixi.js';
import { handleCreateShape, updateShapes } from '@Controllers/shape.controller';
import { shapesPerSec, updateInfo } from '@View/shape.views';

export const app = new Application({
  backgroundColor: 0xAAAAAA
});
app.stage.hitArea = new Rectangle(0, 0, 800, 600);
document.getElementById('game')!.appendChild(app.view);
app.stage.interactive = true;
app.stage.buttonMode = true;
app.stage.on('mousedown', (e: any) => {
  handleCreateShape(e.data.global.x, e.data.global.y);
});

window.setInterval(function() {
  for (let i = 0; i < shapesPerSec; i++) {
    handleCreateShape(Math.floor(Math.random() * 600) + 1, 10);
  }
}, 1000);

function gameLoop() {
  updateShapes();
  updateInfo();
}

app.ticker.add(gameLoop);


