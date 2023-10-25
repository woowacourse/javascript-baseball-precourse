export default class BaseballGame {
    constructor() {
        this.gameStart();
    }
    makeRandomNumberIsDiff(numList, num) {
        let numSet = new Set(numList);
        if(numSet.has(num)) {
            return false;
        }
        return true;
    }
    makeRandomNumber() {
        let numbers = "";
        while (numbers.length < 3) {
            let num = MissionUtils.Random.pickNumberInRange(1,9);
            if (this.makeRandomNumber(numbers, String(num))) {
                numbers += String(num);
            }
        }
        return numbers;
    }
    checkUserInput(userInput) {
        if (!this.checkUserInputLength(userInput)) {
            return false;
        }
        if (!this.checkUserInputIsNumbers(userInput)) {
            return false;
        }
        if (!this.checkUserInputNumberRange(userInput)) {
            return false;
        }
        if (!this.checkUserInputNumberIsDiff(userInput)) {
            return false;
        }
        return true;
    }
    checkUserInputLength(input) {
        if (input.length == 3) {
            return true;
        }
        return false;
    }
    checkUserInputIsNumbers(input) {
        for(let i = 0; i < 3; i++) {
            if(isNaN(Number(input[i]))) {
                return false;
            }
        }
        return true;
    }
    checkUserInputNumberRange(input) {
        for(let i = 0; i < 3; i++) {
            if(1 > Number(input[i]) || Number(input[i])>9) {
                return false;
            }
        }
        return true;
    }
    checkUserInputNumberIsDiff(input) {
        let diffNumber = new Set(input);
        if (diffNumber.size === input.length) {
            return true;
        }
        return false;
    }
    checkingScore(computerInputNumbers, userInputNumbers) {
        let score = [0,0];
        for(let i = 0; i < 3; i++) {
            if(computerInputNumbers[i] === userInputNumbers[i]) {
                score[0] += 1;
            }
            else if(computerInputNumbers.includes(userInputNumbers[i])) {
                score[1] += 1;
            }
        }
        return score;
    }
    play(computerInputNumbers, userInputNumbers) {
        const numbers = this.checkingScore(computerInputNumbers, userInputNumbers);
        let answer = "";
        if (score[0] === 0 && score[1] === 0) {
            answer = "낫싱";
        }
        else if (score[0] === 0 && score[1] > 0) {
            answer = '${score[0]}볼';
        }
        else if (score[0] > 0 && score[1] === 0) {
            answer = '${score[0]스트라이크';
        }
        else {
            answer = '$(score[1]}볼 ${score[0]스트라이크';
        }
        return answer;
    }
    checkCorrectness(result) {
        if (result === "3스트라이크") {
            return true;
        }
        return false;
    }
    printResult(answer) {
        const correctness = this.checkCorrectness(answer);
        if (correctness) {
            resultMessage.innerText = "🎉정답을 맞추셨습니다🎉" 
            const submitBtn = document.querySelector("#submit");
            submitBtn.disabled = true;
            return answer;
        }
        return answer;
    }
    outputResult(result) {
        const resultContainer = document.querySelector("#result");
        resultContainer.innerHTML = this.printResult(result);
    }
    restartPart() {
        const restartButton = '<button id="game-restart-button">게임 재시작</button>';
        return '<div>게임을 새로 시작하시겠습니까? ${restartButton}</div>'
    }
    restartButtonFunction() {
        const restartBtn = document.getElementById('game-restart-button');
        restartBtn.addEventListener("click", this.restart);
    }
    restart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");
        const result = document.querySelector("#result");
        input.value = null;
        submitBtn.disabled = false;
        result.innerHTML ="";
        return new BaseballGame();
    }
    gameStart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");

        let computerRandomNumber = this.makeRandomNumber();

        submitBtn.addEventListener('click', () => {
            if (!this.checkUserInput(input.value)) {
                return alert("1~9사이의 서로 다른 세 자리 수를 입력해주세요");
            }
            const result = this.play(computerRandomNumber, input.value);
            this.outputResult(result);
            if (this.checkCorrectness(result)) {
                this.restartButtonFunction();
            }
        })
    }
    validateUserNumbers() {
        const userInput = document.querySelector("#user-input");
        const userNumbers = userInput.value;
        const numberedUserNumbers = userNumbers;

        if(
            userNumbers.length > 3 ||
            userNumbers.length < 3 ||
            userNumbers.includes(0) ||
            userNumbers.includes(' ') ||
            userNumbers === '' ||
            isNaN(numberedUserNumbers) === true
        ) {
            alert("숫자를 조건에 맞게 다시 입력해주세요!");
            return;
        }
        const userNumberMap = {};
        for (let number of userNumbers)
            userNumberMap[number] = userNumberMap[number] + 1 || 1;
        for (let count in userNumberMap) {
            if(userNumberMap[count] > 1) {
                alert("숫자를 조건에 맞게 다시 입력해주세요!");
                return;
            }
        }
        const splitedUserNumbers = userNumbers.split('');
        return splitedUserNumbers;
    }

}
new BaseballGame();

