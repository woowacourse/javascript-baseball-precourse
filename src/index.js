export default class BaseballGame {
    constructor() {
        this.randomNumbers;
        this.userInputNumbers;

        this.userInput = document.querySelector('#user-input');
        this.confirmBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');

        this.gameInit();
    }
    gameInit() {
        this.setRandomNumber();
    }

    setRandomNumber() {
        const candidates = [];
        while (candidates.length < 3) {
            const candidate = Math.floor(Math.random() * 9) + 1;
            if (!candidates.includes(candidate)) {
                candidates.push(candidate);
            }
        }
        const generatedNumber = candidates.join('');
        this.randomNumbers = generatedNumber;
    }
    // numberValidator() {}
    // handleUserInput() {}
    // onConfirmBtnClick() {}
    // showAlert() {}
    // compareNumbers() {}
    // appendResult() {}
    // onRestartBtnClick() {}
    // gameInit() {}

    play(computerInputNumbers, userInputNumbers) {
        return '결과 값 String';
    }
}

new BaseballGame();
