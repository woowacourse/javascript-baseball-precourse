import { RESULT_TEXT } from "../data/constants.js";

class GameRules {
    get generateNumberArray() {
        const randomUtils = MissionUtils.Random.pickNumberInRange;

        const resultNumbers = new Set();
        while (resultNumbers.size < 3) {
            resultNumbers.add(randomUtils(1, 9));
        }

        return [...resultNumbers];
    }

    getGameResult(computerValues, userValues) {
        const result = {
            end: false,
            strike: 0,
            ball: 0,
        };

        userValues.forEach((value, index) => {
            if (value === computerValues[index]) result.strike++;
            else if (computerValues.includes(value)) result.ball++;
        });

        if (result.strike === 3) result.end = true;
        return result;
    }

    getGameHintText(strike, ball) {
        if (ball === 0 && strike === 0) return RESULT_TEXT.GAME_HINT_NOTHING;

        const textJoinArray = [];
        if (ball > 0) textJoinArray.push(ball + RESULT_TEXT.GAME_HINT_BALL);
        if (strike > 0) textJoinArray.push(strike + RESULT_TEXT.GAME_HINT_STRIKE);

        return textJoinArray.join(" ");
    }
}

export const gameRules = new GameRules();
