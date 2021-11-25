import { GAME_RULE } from "../utils/constants.js";

export default class Computer {
    constructor() {
        this.answer = this.generateAnswer();
    }

    // 컴퓨터가 정답을 생성하는 함수
    generateAnswer() {
        const numbers = new Set();
        const { answerLength, answerRange } = GAME_RULE;
        const { minNum, maxNum } = answerRange;

        while (numbers.size < answerLength) {
            const num = MissionUtils.Random.pickNumberInRange(minNum, maxNum);
            numbers.add(num);
        }

        return [...numbers];
    }

    // 컴퓨터가 생성한 정답 반환
    getAnswer() {
        return this.answer;
    }
}