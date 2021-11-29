import BaseballGame from "./BaseballGame.js";
import EventManager from "./EventManager.js";

const baseballGame = new BaseballGame();
const eventManager = new EventManager(baseballGame);

eventManager.initEventListeners();
