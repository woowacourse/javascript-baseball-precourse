export default class BaseballGame {

  constructor() {
    this.NUMBER_DIGITS = 3;

    this.roundData = [];
    this.answer = this.generateAnswer();
    console.log(`컴퓨터의 랜덤값: ${this.answer}`);

    this.$app = document.querySelector("#app");
    this.$userInput = document.querySelector("#user-input");
    this.$submitButton = document.querySelector("#submit");
    this.$result = document.querySelector("#result");

    const onClickSubmitButton = () => {
      const userInput = this.$userInput.value;
      console.log(`유저의 입력값: ${userInput}`);

      if (this.isValid(userInput)) {
        const userInputNumbers = Number(userInput);
        const playResult = this.play(this.answer, userInputNumbers);
        console.log(`힌트: ${playResult}`);

        const isUserFoundAnswer = this.answer === userInputNumbers;
        this.$userInput.disabled = isUserFoundAnswer;

        this.setState([{
          userInput: userInputNumbers, 
          playResult,
          isUserFoundAnswer
        },
        ...this.roundData]);
      } else {
        alert(`'${userInput}'은(는) 유효한 입력값이 아닙니다. 다시 입력해주세요.`);
      };

      this.$userInput.value = "";
      this.$userInput.focus();
    };

    const onClickGameRestartButton = () => {
      this.$userInput.disabled = false;
      this.setState([]);
      this.answer = this.generateAnswer();
      console.log(`컴퓨터의 랜덤값: ${this.answer}`);
  
      this.$userInput.focus();  
    };

    const onKeydown = (e) => {
      if (e.key === "Enter" && this.$userInput.value !== "") {
        onClickSubmitButton();
      };
    };

    this.$userInput.addEventListener("keydown", onKeydown);

    this.$app.addEventListener("click", (e) => {
      if (e.target.id === "submit" && this.$userInput.value !== "") {
        onClickSubmitButton();
      } else if (e.target.id === "game-restart-button") {
        onClickGameRestartButton();
      };
    });

    this.render();
  }

  setState(nextRoundData) {
    this.roundData = nextRoundData;
    this.render();
  }

  render() {
    this.$result.innerHTML = this.roundData.map((data, index, arr) => {
      const {userInput, playResult, isUserFoundAnswer} = data;
      let _returnHTML = "";
      
      if (isUserFoundAnswer) {
        _returnHTML =`
          <div>
            <strong>🎉 정답을 맞추셨습니다! 🎉</strong>
          </div>
          <div>
            <span>게임을 새로 시작하시겠습니까?</span>
            <button id="game-restart-button">게임 재시작</button>
          </div>
          <br>
          `;
      };

      _returnHTML += `
        <div class="result__row-container">
          <div>
            <strong>${arr.length - index}라운드: ${userInput}</strong>
          </div>
          <div class="result__play-result">${playResult}</div>
          <hr>
        </div>
        `;

        return _returnHTML;
    }).join("");
  }

  generateAnswer() {
    const randomNumbers = [];
    
    while (randomNumbers.length < this.NUMBER_DIGITS) {
      const randomNumber = this.getRandomNumber();

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      };
    };

    const _answer = Number(randomNumbers.join(""));

    return _answer;
  }

  getRandomNumber() {
    const MIN = 1;
    const MAX = 9;

    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN, 0);
  };

  isValid(userInputString) {
    let _isValid = null;

    if (userInputString.length !== this.NUMBER_DIGITS) {
      _isValid = false;
    } else if (!this.isMadeUpOf1to9(userInputString)) {
      _isValid = false;
    } else if (!this.hasDifferentNumbers(userInputString)) {
      _isValid = false;
    } else {
      _isValid = true;
    };
    
    return _isValid;
  }

  isMadeUpOf1to9(str) {
    const AVAILABLE_DIGITS = "123456789";

    return this.isContainingGivenCharacters(str, AVAILABLE_DIGITS);
  }

  isContainingGivenCharacters(str, GIVEN_CHARACTERS) {
    const chars = str.split("");
    const isContaining = chars.every(char => GIVEN_CHARACTERS.includes(char));

    return isContaining;
  }

  hasDifferentNumbers(str) {
    const chars = str.split("");
    const charSet = Array.from(new Set(chars));

    return charSet.length === str.length;
  }

  play(computerInputNumbers, userInputNumbers) {

    const computerInputChars = computerInputNumbers.toString().split("");
    const userInputChars = userInputNumbers.toString().split("");

    const total = userInputChars.filter(char => computerInputChars.includes(char)).length;
    const strike = userInputChars.filter((char, idx) => char === computerInputChars[idx]).length;
    const ball = total - strike;

    let playResult = null;
    if (strike === 0 && ball === 0) {
      playResult = "낫싱";
    } else if (strike === 0) {
      playResult = `${ball}볼`;
    } else if (ball === 0) {
      playResult = `${strike}스트라이크`;  
    } else {
      playResult = `${ball}볼 ${strike}스트라이크`;
    };

    return playResult;
  };
}

document.addEventListener("DOMContentLoaded", () => new BaseballGame());
