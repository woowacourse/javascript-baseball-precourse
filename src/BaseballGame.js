export default class BaseballGame {
	#answer = [];

	constructor() {
		while (this.#answer.length != 3) {
			const n = Math.floor(Math.random() * 9) + 1;

			if (this.#answer.includes(n)) {
				continue;
			}
			this.#answer.push(n);
		}
	}
}
