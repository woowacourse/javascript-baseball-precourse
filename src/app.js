import GameController from './controller.js';
import GameView from './view.js';

window.addEventListener('DOMContentLoaded', () => {
  const view = new GameView();
  const controller = new GameController(view);
  controller.app();
});
