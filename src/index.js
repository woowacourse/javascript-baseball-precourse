export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        // return "결과 값 String";
    };
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();

const userInput = document.querySelector("#user-input");
const button = document.querySelector("#submit");
const result = document.querySelector("#result");
const reStartDiv = document.createElement("div");
const reStartButton = document.createElement("button");
let stopFlag = false;

function makeComuputerNumber() {
    const computerNumArr = Array(9)
        .fill(0)
        .map((v, i) => (v = i + 1));
    const computerNumber = [];
    for (let i = 0; i < 3; i++) {
        const choiceNumber = Math.floor(Math.random() * (9 - i));
        computerNumber.push(computerNumArr.splice(choiceNumber, 1)[0]);
    }
    return computerNumber;
}
const computerNumber = makeComuputerNumber();
console.log(computerNumber);

function validateInput() {
    const userInputValue = userInput.value;
    const numberLength = userInputValue.length;
    const isText = userInputValue.split("").filter((v) => {
        return v.charCodeAt(0) > 48 && v.charCodeAt(0) < 58;
    });
    console.log(isText);

    if (numberLength > 3 || numberLength < 0) {
        alert("다시 입력하세요.");
        stopFlag = true;
    } else if (
        userInputValue.split("").includes("0") ||
        userInputValue.split("").includes("e")
    ) {
        alert("다시 입력하세요.");
        stopFlag = true;
    } else if (
        userInputValue[0] === userInputValue[1] ||
        userInputValue[0] === userInputValue[2] ||
        userInputValue[1] === userInputValue[2]
    ) {
        alert("다시 입력하세요.");
        stopFlag = true;
    } else if (isText.length !== 3) {
        alert("다시 입력하세요.");
        stopFlag = true;
    }
}
function showResult(strike, ball) {
    if (strike === 3) {
        result.textContent = "정답을 맞추셨습니다!";
        reStartDiv.textContent = "게임을 새로 시작하시겠습니까?";
        reStartButton.textContent = "재실행";
        result.appendChild(reStartDiv);
        reStartDiv.appendChild(reStartButton);
    } else if (ball && strike) {
        result.textContent = `${ball}볼 ${strike}스트라이크`;
    } else if (ball) {
        result.textContent = `${ball}볼`;
    } else if (strike) {
        result.textContent = `${strike}스트라이크`;
    } else {
        result.textContent = "낫싱";
    }
}

function reStart() {
    const computerNumber = makeComuputerNumber();
    compareNumber();
    console.log(computerNumber);
}

function compareNumber() {
    validateInput(userInput.value);
    if (stopFlag) {
        userInput.value = "";
        userInput.focus();
        return;
    }
    const userNumber = userInput.value.split("");
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userNumber.length; i++) {
        if (Number(userNumber[i]) === computerNumber[i]) {
            strike += 1;
        } else if (computerNumber.includes(Number(userNumber[i]))) {
            ball += 1;
        }
    }
    showResult(strike, ball);
    userInput.value = "";
    userInput.focus();
}

reStartButton.addEventListener("click", reStart);
button.addEventListener("click", compareNumber);
