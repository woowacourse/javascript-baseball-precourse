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

	#validate(value) {
		const parsed = parseInt(value);

		if (Number.isNaN(parsed)) {
			return false;
		}
		if (parsed < 123 || parsed > 987) {
			return false;
		}
		if (new Set(value).size !== 3) {
			return false;
		}

		return true;
	}

	#submitPlay(challenge) {
		this.#btn.disabled = true;
		this.#input.disabled = true;
		this.#result.innerText = this.#game.play(challenge);
		this.#result.innerText === "정답"
			? this.#createNewGameBtn()
			: this.#createNewChallenge();
	}

	#createNewChallenge() {
		const line = document.createElement("hr");
		const resultHead = document.createElement("h3");
		resultHead.innerText = "📄 결과";

		this.#input = document.createElement("input");
		this.#input.type = "text";
		this.#btn = document.createElement("button");
		this.#btn.innerText = "확인";
		this.#btn.addEventListener("click", this.#handleSubmit.bind(this));
		this.#result = document.createElement("div");

		[line, this.#input, this.#btn, resultHead, this.#result].forEach((v) =>
			this.#app.appendChild(v)
		);
	}

	#createNewGameBtn() {
		const line = document.createElement("hr");
		const p = document.createElement("p");
		const btn = document.createElement("button");
		p.innerText = "게임을 다시 시작할까요?";
		btn.innerText = "재시작";
		btn.addEventListener("click", (e) => {
			this.#game = new BaseballGame();
			this.#createNewChallenge();
			e.target.disabled = true;
		});

		[line, p, btn].forEach((v) => this.#app.appendChild(v));
	}
}
