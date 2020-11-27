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

	play(challenge) {
		const count = {
			ball: 0,
			strike: 0,
		};
		let result = "";

		for (let i in challenge) {
			if (this.#answer[i] === challenge[i]) {
				count.strike++;
				continue;
			}
			if (this.#answer.includes(challenge[i])) {
				count.ball++;
			}
		}

		if (count.strike === 3) {
			return "정답";
		}
		if (count.ball > 0) {
			result += `${count.ball}볼 `;
		}
		if (count.strike > 0) {
			result += `${count.strike}스트라이크`;
			// todo : 뭔가 오류가 있다
		}
		if (count.ball === 0 && count.strike === 0) {
			result = "낫싱";
		}

		return result;
	}
}
