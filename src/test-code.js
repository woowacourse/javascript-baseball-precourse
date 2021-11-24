/*
    테스트 코드 작성
*/
export default class BaseballGame {
    constructor() {
        console.log(this.isUserInputVerify("012"));
    }

    isUserInputVerify(userInputNumber) {
        const isUniqueWord = [...new Set(userInputNumber.split(""))].length === 3;
        const isThreeNumber = /^[1-9]{3}$/g.test(userInputNumber);

        return isThreeNumber && isUniqueWord;
    }

    play(computerInputNumbers, userInputNumbers) {}
}

new BaseballGame();
