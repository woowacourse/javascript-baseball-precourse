import MissionUtils from "../node_modules/@woowacourse/mission-utils";

window.onload = function () {
    const submit = document.getElementById("submit");
    submit.onclick = BaseballGame.getValue();
};

export default function BaseballGame() {
    let computerInputNumbers = MissionUtils.Random.pickNumberInList([1, 10, 3]);

    this.play = function (computerInputNumbers, userInputNumbers) {
        const comNums = computerInputNumbers.split("");
        const userNums = userInputNumbers.split("");
        if (checkUserNums(userNums)) {
            alert("올바른 숫자를 입력해주세요");
            document.getElementById("user-input").value = "";
        } else {
            const strCnt = checkStrike(comNums, userNums);
            const ballCnt = checkBall(comNums, userNums);

            if (strCnt === 0 && ballCnt === 0) return "낫싱";
            else if (strCnt !== 0 && ballCnt !== 0)
                return `${ballCnt}볼 ${strCnt}스트라이크`;
            else if (strCnt === 0 && ballCnt !== 0) return `${ballCnt}볼`;
            else if (strCnt === 3) return "정답";
        }
    };

    const getVaule = function () {
        // 결과값에 결과를 return 하는 함수
        const result = document.getElementById("result");
        const userInputNumbers = document.getElementById("user-input").value;
        result.value = this.play(computerInputNumbers, userInputNumbers);
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
            checkNums(element, index);
        });

        function checkNums(element, index) {
            userNums.forEach((ele, idx) => {
                if (idx !== index && element === ele) cnt++;
            });
        }
        return cnt;
    };

    const checkUserNums = function (userNums) {
        let isPass = true;

        if (userNums.length > 3) isPass = false;
        userNums.forEach((element, index) => {
            checkNums(element, index);
        });

        function checkNums(element, index) {
            userNums.forEach((ele, idx) => {
                if (idx !== index && element === ele) isPass = false;
            });
        }

        return isPass;
    };
}
