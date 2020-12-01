const NUMBER_SIZE = 3;

export default class BaseballGame {
    constructor() {
        this.randomNumbers;
        this.userInputNumbers;

        this.userInput = document.querySelector('#user-input');
        this.confirmBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');

        this.userInput.addEventListener('keyup', this.handleUserInput);

        this.gameInit();
    }
    gameInit() {
        this.setRandomNumber();
    }

    setRandomNumber() {
        const candidates = [];
        while (candidates.length < NUMBER_SIZE) {
            const candidate = Math.floor(Math.random() * 9) + 1;
            if (!candidates.includes(candidate)) {
                candidates.push(candidate);
            }
        }
        const generatedNumber = candidates.join('');
        this.randomNumbers = generatedNumber;
    }
    handleUserInput = (e) => {
        const { value } = e.target;
        this.userInputNumbers = value;
    };
    numberValidator() {
        //아닌경우
        // 길이가 3이 아닐때
        if (this.userInputNumbers.length !== NUMBER_SIZE) {
            return false;
        }
        // 중복 숫자가 있을때
        const setNumbers = new Set(this.userInputNumbers);
        if (setNumbers.size !== NUMBER_SIZE) {
            return false;
        }
        return true;
    }
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
