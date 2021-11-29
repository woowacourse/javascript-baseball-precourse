export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
        const comNums = (computerInputNumbers + "").split(",");
        const userNums = (userInputNumbers + "").split(",");
        if (!checkUserNums(userNums)) {
            alert("올바른 숫자를 입력해주세요");
        } else {
            const strCnt = checkStrike(comNums, userNums);
            const ballCnt = checkBall(comNums, userNums);

            const result = document.getElementById("result");
            if (strCnt === 3) result.style.display = "block";
            else result.style.display = "none";
            return getResult(strCnt, ballCnt);
        }
    };

    const getResult = function (strCnt, ballCnt) {
        if (strCnt < 3) {
            if (strCnt === 0 && ballCnt === 0) return "낫싱";
            else if (strCnt !== 0 && ballCnt !== 0)
                return `${ballCnt}볼 ${strCnt}스트라이크`;
            else if (strCnt === 0 && ballCnt !== 0) return `${ballCnt}볼`;
            else if (strCnt !== 0 && ballCnt === 0)
                return `${strCnt}스트라이크`;
        } else {
            return "";
        }
    };
    const checkStrike = function (comNums, userNums) {
        // 스트라이크를 확인하는 함수
        let cnt = 0;
        comNums.forEach((element, index) => {
            if (element === userNums[index]) cnt++;
        });

        return cnt;
    };

    const checkBall = function (comNums, userNums) {
        // 볼을 확인하는 함수. 볼의 조건은 comNums안에 있는 값들 중 같은 인덱스가 아니면서, 해당 값을 포함하고 있는 함수를 의미.
        let cnt = 0;
        comNums.forEach((element, index) => {
            cnt = addCnt(userNums, element, index, cnt);
        });
        return cnt;
    };

    function addCnt(userNums, element, index, cnt) {
        userNums.forEach((ele, idx) => {
            if (idx !== index && element === ele) cnt++;
        });
        return cnt;
    }
    const checkUserNums = function (userNums) {
        let isPass = true;
        if (userNums.length !== 3) isPass = false;
        userNums.forEach((element, index) => {
            isPass = checkRepe(userNums, element, index, isPass);
        });

        return isPass;
    };
    function checkRepe(userNums, element, index, isPass) {
        userNums.forEach((ele, idx) => {
            if (idx !== index && element === ele) isPass = false;
        });
        return isPass;
    }
}
