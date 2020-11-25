export default function BaseballGame() {
  const submitButton = document.body.querySelector("#submit");
  const userInput = document.body.querySelector("#user-input");

  this.play = function (computerInputNumbers, userInputNumbers) {
    const result = {
      strike: 0,
      ball: 0,
      out: 0,
    };
    compareInput(result, computerInputNumbers, userInputNumbers);
    console.log(computerInputNumbers, userInputNumbers, result);
    if (result.out === 3) return "낫싱";
    if (result.strike === 0) return `${result.ball}볼`;
    if (result.ball === 0) return `${result.strike}스트라이크`;
    return `${result.ball}볼 ${result.strike}스트라이크`;
  };

  const compareInput = (result, answer, userInput) => {
    for (let userIndex = 0; userIndex < 3; userIndex++) {
      const answerNumberIndex = answer.indexOf(userInput[userIndex]);
      answerNumberIndex >= 0
        ? answerNumberIndex === userIndex
          ? result.strike++
          : result.ball++
        : result.out++;
    }

    return result;
  };

  const makeOnAnswer = () => {
    const ALL_NUMBERS = 9;
    const numberArray = Array(ALL_NUMBERS)
      .fill()
      .map((v, i) => i + 1);
    let answer = "";

    for (let i = 1; i <= 3; i++) {
      const selectedNumber = numberArray.splice(
        selectRandomNumber(numberArray.length),
        1
      );
      answer += selectedNumber;
    }

    return answer;
  };

  const selectRandomNumber = (length) => {
    const randomNumber = Math.floor(Math.random() * length);

    return randomNumber;
  };

  const submitUserInput = (answer) => {
    if (isInputRight()) {
      const resultText = this.play(answer, userInput.value);
      showResultOnScreen(resultText);
    }
  };

  const isInputRight = () => {
    const { value } = userInput;

    if (value.match(/[^1-9]/g)) return alert("숫자가 아닙니다.");
    if (value.length !== new Set(value).size) {
      return alert("숫자가 중복됩니다.");
    }
    if (value.length !== 3) return alert("3자리의 숫자를 입력해주세요.");

    return true;
  };

  const showResultOnScreen = (resultText) => {
    const resultDiv = document.body.querySelector("#result");
    resultDiv.innerText = resultText;
  };

  const gameStart = () => {
    const answer = makeOnAnswer();
    const boundSubmitUserInput = submitUserInput.bind(null, answer);
    submitButton.addEventListener("click", boundSubmitUserInput);
  };

  gameStart();
}

new BaseballGame();
