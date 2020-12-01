const NUMBER_SIZE = 3;
const SUCCESS_MESSAGE = '🎉정답을 맞추셨습니다!🎉';
const NOTHING_MESSAGE = '낫싱';
const ALERT_MESSAGE = '유효한 숫자를 입력해주세요!';
const RESTART_ID = 'game-restart-button';

const failFoam = (number, message) => `
<div class ="divider"></div>
<input value=${number}> <button>확인</button>
<h3>📄 결과</h3>
<p>${message}</p>
`;

const successFoam = (message) =>
    `
<p><strong>${message}</strong></p>
<p>게임을 새로 시작하시겠습니까? <button id=${RESTART_ID}>재시작</button></p>
`;

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
        this.resultSection.innerHTML = '';
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
        //입력값이 1~9 가 아닐때
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < this.userInputNumbers.length; i++) {
            if (!numbers.includes(this.userInputNumbers[i])) {
                return false;
            }
        }

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

            this.appendResult(resultMessage);
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
    showAlert() {
        alert(ALERT_MESSAGE);
    }
    appendResult(message) {
        if (message === SUCCESS_MESSAGE) {
            this.resultSection.innerHTML += successFoam(message);
            const restartBtn = document.querySelector(`#${RESTART_ID}`);
            this.setOnClick(restartBtn, this.onRestartBtnClick);
        } else {
            this.resultSection.innerHTML += failFoam(
                this.userInputNumbers,
                message
            );
        }
    }

    setOnClick = (target, onClick) => {
        target.addEventListener('click', onClick);
    };

    onRestartBtnClick = () => {
        this.gameInit();
    };

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
