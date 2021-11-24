/*
    테스트 코드 작성
*/
export default class BaseballGame {
    constructor() {
        this.$result = document.getElementById("result");
        this.$submitButton = document.getElementById("submit");
        this.$userInput = document.getElementById("user-input");

        this.init();
        this.$submitButton.addEventListener("click", (event) => {
            this.onSubmitButtonClick(event);
        });
    }

    init() {
        this.playerState = {
            computerNumbers: this.getComputerNumbers(),
            isGameDisable: false,
            latestTry: { strike: 0, ball: 0 },
        };

        this.$result.style.display = "none";
        this.$result.innerText = "";
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

    play(computerInputNumbers, userInputNumbers) {
        this.playerState.latestTry = this.getMatchGameResult(computerInputNumbers, userInputNumbers);
        const gameResult = this.playerState.latestTry;

        if (gameResult.strike === 3) return "🎉정답을 맞추셨습니다!🎉";
        else if (gameResult.strike === 0 && gameResult.ball === 0) return "낫싱";

        let combineTexts = [];
        if (gameResult.ball > 0) combineTexts.push(`${gameResult.ball}볼`);
        if (gameResult.strike > 0) combineTexts.push(`${gameResult.strike}스트라이크`);

        return combineTexts.join(" ");
    }

    onSubmitButtonClick(event) {
        event.preventDefault();
        const isValid = this.isUserInputVerify(this.$userInput.value);
        if (isValid === false) {
            alert("숫자를 정확히 입력해주세요.\n(중복 없는 1~9 사이의 숫자 3개)");
            return false;
        }

        const userInputNumbers = this.replaceToNumberArray(this.$userInput.value);
        const resultText = this.play(this.playerState.computerNumbers, userInputNumbers);

        this.renderGameResult(resultText);
    }
}

new BaseballGame();
