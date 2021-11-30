export function comNums() {
    const comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return comNums;
}

export function checkStrike(comNums, userNums) {
    let cnt = 0;
    comNums.forEach((element, index) => {
        if (element === userNums[index]) cnt++;
    });

    return cnt;
}

export function checkBall(comNums, userNums) {
    let cnt = 0;
    comNums.forEach((element) => {
        if (userNums.includes(element)) cnt++;
    });
    return cnt;
}

export function getResult(strCnt, ballCnt) {
    const $result = document.getElementById("result");
    const $success = document.getElementById("success");
    if (strCnt === 3) {
        document
            .getElementById("game-restart-button")
            .addEventListener("click", function (e) {
                e.preventDefault();
                comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
                $userNums.value = "";
            });
        $success.style.display = "block";
        $result.style.display = "none";
    } else {
        $success.style.display = "none";
        $result.style.display = "block";

        if (strCnt === 0 && ballCnt === 0) return "낫싱";
        else if (strCnt === 0) return `${ballCnt}볼`;
        else if (ballCnt === 0) return `${strCnt}스트라이크`;
        else return `${ballCnt}볼 ${strCnt}스트라이크`;
    }
}
