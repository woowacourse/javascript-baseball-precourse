const getNonDuplicatedNumber = () => {
    const flag = new Array(10).fill(0);
    let target = "";
    while (target.length < 3) {
        let num = Math.floor(Math.random() * 9 + 1);
        while (flag[num] === 1) {
            num = Math.floor(Math.random() * 9 + 1);
        }
        flag[num] = 1;
        target += num;
    }
    return target;
}

const saveTargetNumber = (num) => {
    localStorage.setItem("targetNumber", num);
}

const getTargetNumber = () => {
    return localStorage.getItem("targetNumber");
}

const compareNums = (target, input) => {
    let res = "낫싱";
    let [strikeCnt, ballCnt] = [0, 0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === target[i]) { // 자리수와 현재 값이 같으면
            strikeCnt++;
        } else if (target.includes(input[i])) {
            ballCnt++;
        }
    }
    if (!(strikeCnt === 0 && ballCnt === 0)) {
        if (strikeCnt === 0) {
            res = `${ballCnt}볼`;
        } else if (ballCnt === 0) {
            res = `${strikeCnt}스트라이크`;
        } else {
            res = `${ballCnt}볼 ${strikeCnt}스트라이크`;
        }
    }
    return res;
}

const printResult = (str) => {
    const resultContainer = document.getElementById("result");
    const textElement = document.createElement("p");
    if (str === "3스트라이크") {
        const restartText = document.createElement("span");
        const restartBtn = document.createElement("button");
        const succesMessageHTML = "<div><span>🎉</span> <strong>정답을 맞추셨습니다!</strong> <span>🎉</span></div>";
        textElement.innerHTML = succesMessageHTML;
        restartText.innerText = "게임을 새로 시작하시겠습니까?";
        restartBtn.innerText = "게임 재시작";
        restartBtn.setAttribute("id", "game-restart-button");
        restartBtn.onclick = restart;
        resultContainer.appendChild(textElement);
        resultContainer.appendChild(restartText);
        resultContainer.appendChild(restartBtn);
    } else {
        textElement.innerText = str;
        resultContainer.appendChild(textElement);
    }

}

const clearResultArea = () => {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = '';
}

const checkValidInput = (userInput) => {
    let res = true;
    if (userInput.length !== 3) {
        alert("길이가 3인 숫자를 입력해주세요. 🙏");
        res = false;
        clearInput();
    } else if ([...(new Set(userInput))].length !== 3) {
        alert("중복되지 않은 3자리의 숫자를 입력해주세요. 🙏");
        clearInput();
    }
    return res;
}

const getUserInput = () => {
    const userInput = document.getElementById("user-input").value;
    clearResultArea();
    if (!checkValidInput(userInput)) {
        return;
    }
    const res = new BaseballGame().play(userInput, getTargetNumber("targetNumber"));
    printResult(res);
}

export default function BaseballGame() {
    this.play = function(computerInputNumbers, userInputNumbers) {
        return compareNums(computerInputNumbers, userInputNumbers);
    };
}

const clearInput = () => {
    document.getElementById("user-input").value = '';
}

const restart = () => {
    clearInput();
    saveTargetNumber(getNonDuplicatedNumber());
    clearResultArea();
}

const init = () => {
    const btnElem = document.getElementById('submit');
    const inputElem = document.getElementById('user-input');
    restart();
    inputElem.addEventListener("keyup", e => {
        if (e.keyCode === 13) {
            getUserInput();
        }
    });
    btnElem.addEventListener("click", () => {
        getUserInput();
    });
}

init();