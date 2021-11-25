import { GAME_RULE } from "./constants";

export default class Computer {
    constructor() {
        this.answer = this.generateAnswer();
    }

    generateAnswer() {
        const numbers = new Set();
        const { answerLength, answerRange } = GAME_RULE;

        while (numbers.size < answerLength) {
            numbers.add(MissionUtils.Random.pickNumberInRange(answerRange.min, answerRange.max));
        }

        return [...numbers];
    }
}