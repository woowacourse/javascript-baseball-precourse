import generateRandomNumber from "./randomNumber.js";
import isValid from "./validation.js";

let computerInputNumbers = generateRandomNumber();
console.log(computerInputNumbers);

//2. 입력한 숫자 확인
const playerInput = document.getElementById("user-input");
const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValid(playerInput.value) === true) {
    const userInputNumbers = [...playerInput.value.toString()];
    let result = compareNumber(computerInputNumbers, userInputNumbers);

    printResult(result);
  }
});

//3. 입력한 숫자와 생성한 숫자 비교
function compareNumber(targetArray, comparisonArray) {
  let strike = 0;
  let ball = 0;
  let resultString = "";

  for (let i = 0; i < 3; i++) {
    if (targetArray[i] === comparisonArray[i]) {
      strike++;
    } else if (targetArray.includes(comparisonArray[i])) {
      ball++;
    }
  }
  if (strike !== 0 || ball !== 0) {
    if (strike === 3) {
      resultString = "정답!";
    } else {
      resultString = `${ball}볼 ${strike}스크라이크`;
    }
  } else {
    resultString = "낫싱";
  }
  return resultString;
}

function printResult(string) {
  if (string !== "정답!") {
    document.getElementById("result").innerHTML = string;
  } else {
    document.getElementById("result").innerHTML = string;
    const correctResult = document.createElement("h5");
    correctResult.innerHTML = "게임을 새로 시작하시겠습니까?";
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "재시작";
    button.setAttribute("id", "game-restart-button");
    //4. 정답을 맞추면 재시작하기
    restartButton.addEventListener("click", (e) => {
      e.preventDefault();
      //let copy = [...computerInputNumbers];
      //copy = generateRandomNumber();
      computerInputNumbers = generateRandomNumber();
      console.log(computerInputNumbers);
      document.getElementById("result").innerHTML = "";
    });

    document.getElementById("result").appendChild(correctResult);
    document.getElementById("result").appendChild(restartButton);
  }
}
