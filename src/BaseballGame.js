import showResult from "./showResult.js";

export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < userInputNumbers.length; i++) {
            if (Number(userInputNumbers[i]) === computerInputNumbers[i]) {
                strike += 1;
            } else if (
                computerInputNumbers.includes(Number(userInputNumbers[i]))
            ) {
                ball += 1;
            }
        }
        const result = showResult(ball, strike);
        return result;
    };
}
