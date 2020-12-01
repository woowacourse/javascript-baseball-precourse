const NUMBER_SIZE = 3;
const SUCCESS_MESSAGE = '🎉정답을 맞추셨습니다!🎉';
const NOTHING_MESSAGE = '낫싱';

export default class BaseballGame {
    constructor() {
        this.randomNumbers;
        this.userInputNumbers;

        this.userInput = document.querySelector('#user-input');
        this.confirmBtn = document.querySelector('#submit');
        this.resultSection = document.querySelector('#result');

        this.userInput.addEventListener('keyup', this.handleUserInput);
        this.confirmBtn.addEventListener('click', this.onConfirmBtnClick);

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
    clearUserInput() {
        this.userInput.value = '';
    }
    onConfirmBtnClick = () => {
        const availability = this.numberValidator();
        if (availability) {
            const resultMessage = this.play(
                this.randomNumbers,
                this.userInputNumbers
            );
        } else {
            this.showAlert();
        }
        this.clearUserInput();
    };

    compareNumbers(firstNumbers, secondNumbers) {
        let ballCount = 0;
        let strikeCount = 0;
        for (let i = 0; i < firstNumbers.length; i++) {
            if (firstNumbers.includes(secondNumbers[i])) {
                ballCount++;
            }
            if (firstNumbers[i] === secondNumbers[i]) {
                strikeCount++;
                ballCount--;
            }
        }
        return {
            ballCount,
            strikeCount,
        };
    }
    showAlert() {}
    // appendResult() {}
    // onRestartBtnClick() {}

    play(computerInputNumbers, userInputNumbers) {
        let result = '';
        const { ballCount, strikeCount } = this.compareNumbers(
            computerInputNumbers,
            userInputNumbers
        );
        if (strikeCount === NUMBER_SIZE) {
            result = SUCCESS_MESSAGE;
            return result;
        }
        if (strikeCount === 0 && ballCount === 0) {
            result = NOTHING_MESSAGE;
            return result;
        }
        if (ballCount !== 0) {
            result += `${ballCount}볼 `;
        }
        if (strikeCount !== 0) {
            result += `${strikeCount}스트라이크`;
        }
        return result;
    }
}

new BaseballGame();
