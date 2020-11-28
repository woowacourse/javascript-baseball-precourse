export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

// new BaseballGame();

function makeComputerNumbers() {
    const computerNumArr = Array(9)
        .fill(0)
        .map((v, i) => (v = i + 1));
    const computerNumbers = [];
    for (let i = 0; i < 3; i++) {
        const choiceNumber = Math.floor(Math.random() * (9 - i));
        computerNumbers.push(computerNumArr.splice(choiceNumber, 1)[0]);
    }
    return computerNumbers;
}

function checkNumberLength(userInputNumbers) {
    const inputNumberlength = userInputNumbers.length;
    return inputNumberlength === 3;
}

function checkNumber0(userInputNumbers) {
    return !userInputNumbers.includes("0");
}

function checkSameNumber(userInputNumbers) {
    const eachInputNumber = [...new Set(userInputNumbers)].length;
    return eachInputNumber === 3;
}

function checkNotNumber(userInputNumbers) {
    const isNumber = userInputNumbers.filter((v) => {
        return v.charCodeAt(0) > 48 && v.charCodeAt(0) < 58;
    });
    const countNumber = isNumber.length;
    return countNumber === 3;
}

function validateInputNumber(userInputNumbers) {
    const checkFunctions = [
        checkNotNumber,
        checkNumber0,
        checkNumberLength,
        checkSameNumber,
    ];
    const checkEveryFunction = checkFunctions.every((func) =>
        func(userInputNumbers)
    );
    return checkEveryFunction;
}

function isThreeStrike(ball, strike) {
    if (strike === 3 && ball === 0) {
        return "정답을 맞추셨습니다!";
    }
}

function isOnlyStrike(ball, strike) {
    if (strike === 1 && ball === 0) {
        return `${strike}스트라이크`;
    } else if (strike === 2 && ball === 0) {
        return `${strike}스트라이크`;
    }
}

function isOnlyBall(ball, strike) {
    if (strike === 0 && ball) {
        return `${ball}볼`;
    }
}

function ballAndstrike(ball, strike) {
    if (strike && ball) {
        return `${ball}볼 ${strike}스트라이크`;
    }
}

function noBallNoStrike(ball, strike) {
    if (ball === 0 && strike === 0) {
        return "낫싱";
    }
}

function showResult(ball, strike) {
    const resultFunctions = [
        isThreeStrike,
        isOnlyBall,
        isOnlyStrike,
        ballAndstrike,
        noBallNoStrike,
    ];
    const everyResult = resultFunctions.map((func) => func(ball, strike));
    const getResult = everyResult.filter((result) => result !== undefined);

    return getResult;
}

function compareNumbers(userInputNumbers, computerNumbers) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < userInputNumbers.length; i++) {
        if (Number(userInputNumbers[i]) === computerNumbers[i]) {
            strike += 1;
        } else if (computerNumbers.includes(Number(userInputNumbers[i]))) {
            ball += 1;
        }
    }
    const result = showResult(ball, strike);
    return result;
}

function init() {
    const button = document.querySelector("#submit");
    const result = document.querySelector("#result");
    const userInput = document.querySelector("#user-input");
    const reStartDiv = document.createElement("div");
    const reStartButton = document.createElement("button");

    let computerNumbers = makeComputerNumbers();
    console.log(computerNumbers);

    button.addEventListener("click", handleSubmitClick);
    reStartButton.addEventListener("click", reStart);

    function getUserInputNumbers() {
        return userInput.value.split("");
    }

    function handleSubmitClick() {
        const userInputNumbers = getUserInputNumbers();
        const isValidate = validateInputNumber(userInputNumbers);
        if (isValidate) {
            const [resultText] = compareNumbers(
                userInputNumbers,
                computerNumbers
            );
            afterClickSettings(resultText);
            showRestartButton(resultText);
        } else {
            alert("다시 입력하세요.");
            afterClickSettings("");
        }
    }

    function showRestartButton(resultText) {
        if (resultText === "정답을 맞추셨습니다!") {
            reStartDiv.textContent = "게임을 새로 시작하시겠습니까?";
            reStartButton.textContent = "재실행";
            result.appendChild(reStartDiv);
            reStartDiv.appendChild(reStartButton);
        }
    }

    function afterClickSettings(textContent) {
        result.textContent = textContent;
        userInput.value = "";
        userInput.focus();
        reStartDiv.textContent = "";
    }

    function reStart() {
        afterClickSettings("");
        computerNumbers = makeComputerNumbers();
        console.log(computerNumbers);
    }
}
init();
