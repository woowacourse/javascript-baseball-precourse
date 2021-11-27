import GameController from './controller.js';
import GameView from './view.js';
import GameModel from './model.js';

const selectedDom = {
  $resultSection: document.getElementById('result'),
  $userInput: document.getElementById('user-input'),
  $submitButton: document.getElementById('submit'),
};

window.addEventListener('DOMContentLoaded', () => {
  const model = new GameModel();
  const view = new GameView(selectedDom);
  const controller = new GameController(model, view);
  controller.app();
});
