/*
    테스트 코드 작성
*/
export default class BaseballGame {
    constructor() {
        console.log(this.isUserInputVerify("122"));
    }

    isUserInputVerify(userInputNumber) {
        const isThreeLength = userInputNumber.length === 3;
        const isUniqueWord = [...new Set(userInputNumber.split(""))].length === 3;
        const isOnlyNumber = isNaN(userInputNumber) === false;

        return isThreeLength && isUniqueWord && isOnlyNumber;
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
