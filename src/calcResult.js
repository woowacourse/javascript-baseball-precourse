import { GAME_RULE } from "./constants.js";

export const calcResult = (computerInputNumbers, userInputNumbers) => {
    const result = {
        strike: 0,
        ball: 0
    };

    for (let i = 0; i < GAME_RULE.answerLength; i++) {
        if (computerInputNumbers[i] === userInputNumbers[i]) {
            result.strike++;
        }
        else if (computerInputNumbers.includes(userInputNumbers[i])) {
            result.ball++;
        }
    }

    return result;
}