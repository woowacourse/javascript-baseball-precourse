import GameModel from './model.js';
import GameController from './controller.js';
import GameView from './view.js';

window.addEventListener('DOMContentLoaded', () => {
  const model = new GameModel();
  const view = new GameView(model);
  const controller = new GameController(model, view);
  controller.app();
});
