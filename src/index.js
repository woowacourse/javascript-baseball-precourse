export default function BaseballGame() {
    this.play = function(computerInputNumbers, userInputNumbers) {
        return "결과 값 String";
    };
}


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

const init = () => {
    const game = new BaseballGame();
    console.log(getNonDuplicatedNumber());
    console.log(compareNums("123", "132"))
}

init();