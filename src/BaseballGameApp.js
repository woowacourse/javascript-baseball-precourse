import BaseballGame from "./BaseballGame.js";

export default class BaseballGameApp {
	#app;
	#input;
	#btn;
	#result;
	#game = new BaseballGame();

	constructor(elementId) {
		this.#app = document.querySelector(`#${elementId}`);
		if (!this.#app) {
			throw new Error(`Could not find element named ${elementId}.`);
		}

		this.#input = this.#app.querySelector("#user-input");
		this.#btn = this.#app.querySelector("#submit");
		this.#result = this.#app.querySelector("#result");
	}
}
