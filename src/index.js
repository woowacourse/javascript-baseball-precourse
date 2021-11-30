import BaseballGame from "./BaseballGame/BaseballGame.js";
import EventManager from "./EventManager/EventManager.js";

const baseballGame = new BaseballGame();
const eventManager = new EventManager(baseballGame);

eventManager.initEventListeners();
