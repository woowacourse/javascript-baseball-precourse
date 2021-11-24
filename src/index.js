import { ANSWER_RANGE } from "./asset/constant.js";

export default class BaseballGame {
    constructor() {
        
    }

    play(computerInputNumbers, userInputNumbers) {
    }

    // 정답 생성
    generateAnswer() {
        const ret = new Set();

        while (ret.size < 3) {
            ret.add(MissionUtils.Random.pickNumberInRange(ANSWER_RANGE.MIN, ANSWER_RANGE.MAX));
        }

        return [...ret].join('');
    }
}
