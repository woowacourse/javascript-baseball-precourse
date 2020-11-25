const TARGET_NUMBER = "targetNumber";
const IS_SUCCESSED = "isSuccessed";

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
    localStorage.setItem(TARGET_NUMBER, num);
}

const getTargetNumber = () => {
    return localStorage.getItem(TARGET_NUMBER);
}

const saveIsSuccesed = (flag) => {
    localStorage.setItem(IS_SUCCESSED, flag);
}

const getIsSuccesed = () => {
    return localStorage.getItem(IS_SUCCESSED);
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

const getUserInput = () => {
    const userInput = document.getElementById("user-input").value;
    const res = new BaseballGame().play(userInput, getTargetNumber(TARGET_NUMBER));

    if (res === "3스트라이크") {
        saveIsSuccesed(true);
    }

}

export default function BaseballGame() {
    this.play = function(computerInputNumbers, userInputNumbers) {
        return compareNums(computerInputNumbers, userInputNumbers);
    };
}

const init = () => {
    saveTargetNumber("");
    saveIsSuccesed(false);
    const btn = document.getElementById('submit');
    // saveTargetNumber(getNonDuplicatedNumber());
    btn.onclick = getUserInput;
}

init();