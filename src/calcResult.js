import { GAME_RULE } from "./constants.js";

export const calcResult = (computerInputNumbers, userInputNumbers) => {
    const result = {
        strikeCnt: 0,
        ballCnt: 0
    };

    for (let i = 0; i < GAME_RULE.answerLength; i++) {
        if (computerInputNumbers[i] === userInputNumbers[i]) {
            result.strikeCnt++;
        }
        else if (computerInputNumbers.includes(userInputNumbers[i])) {
            result.ballCnt++;
        }
    }

    return result;
}