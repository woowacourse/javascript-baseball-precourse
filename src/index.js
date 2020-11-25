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

function validateInput(userInputValue) {
    console.log(userInputValue);
    console.log(Number(userInputValue));
    const numberLength = userInput.value.length;
    if (numberLength > 3 || numberLength < 0) {
        alert("다시 입력하세요.");
    } else if (userInputValue.split("").includes("0")) {
        alert("다시 입력하세요.");
    }
    // else if (userInputValue !== Number(userInputValue)) {
    //     alert("다시 입력하세요.");
    // }
}

button.addEventListener("click", function () {
    validateNumber(userInput.value);
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
});
