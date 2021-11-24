/*
    테스트 코드 작성
*/
export default class BaseballGame {
    constructor() {
        console.log(this.getMatchGameResult([7, 1, 2], [7, 1, 2]));
    }

    isUserInputVerify(userInputNumber) {
        const isUniqueWord = [...new Set(userInputNumber.split(""))].length === 3;
        const isThreeNumber = /^[1-9]{3}$/g.test(userInputNumber);

        return isThreeNumber && isUniqueWord;
    }

    getComputerNumbers() {
        const uniqueThreeNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
        return uniqueThreeNumbers;
    }

    replaceToNumberArray(userInputNumber) {
        const userNumbers = userInputNumber.split("");

        let resultNumbers = [];
        userNumbers.forEach((value) => {
            if (isNaN(value) === true) return false;
            resultNumbers.push(Number(value));
        });

        return resultNumbers;
    }

    getMatchGameResult(computerInputNumbers, userInputNumbers) {
        const gameResult = {
            strike: 0,
            ball: 0,
        };

        userInputNumbers.forEach((userNumber, userNumberIndex) => {
            if (userNumber === computerInputNumbers[userNumberIndex]) gameResult.strike++;
            else if (computerInputNumbers.indexOf(userNumber) > -1) gameResult.ball++;
        });

        return gameResult;
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
