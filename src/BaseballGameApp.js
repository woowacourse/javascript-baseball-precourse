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
		this.#btn.addEventListener("click", this.#handleSubmit.bind(this));
	}

	#handleSubmit() {
		const value = this.#input.value;
		const challenge = Array.from(value).map((v) => parseInt(v));

		if (!this.#validate(value)) {
			return alert("올바른 입력이 아닙니다.");
		}
		this.#submitPlay(challenge);
	}

	#validate() {}

	#submitPlay(challenge) {}
}
