import { ANSWER_RANGE } from './asset/constant.js';

export default class Computer {
    constructor() {
        this.answer;
    }

    /**
     * @param {string} userInput 유저 입력값
     * @brief 정답과 유저 입력값을 비교해서 스트라이크, 볼 카운트 리턴
     * @returns {object}
     */
    getStrikeBallCnt(userInput) {
        return [...answer].reduce((m, val, index) => {
            if (val === userInput[index]) {
                m.strikeCnt++;
            } else if (answer.includes(userInput[index])) {
                m.ballCnt++;
            }

            return m;
        }, { ballCnt: 0, strikeCnt: 0 });
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
