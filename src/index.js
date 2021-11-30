export default function BaseballGame() {
    if (!new.target) return new BaseballGame();
    this.comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.$userNums = document.getElementById("user-input");
    this.$result = document.getElementById("result");
    this.$submit = document.getElementById("submit");
    this.$success = document.getElementById("success");

    this.init = () => {
        this.$submit.addEventListener("click", function () {
            result.textContent = renderResult();
        });
        this.$submit.addEventListener("keyup", function (e) {
            if (e.key === "Enter") result.textContent = renderResult();
        });
    };
    const renderResult = () => {
        return this.play(this.comNums, this.$userNums.value);
    };
    this.play = function (computerInputNumbers, userInputNumbers) {
        const comNums = (computerInputNumbers + "").split(",");
        const userNums = (userInputNumbers + "").split(",");
        if (!checkUserNums(userNums)) {
            alert("올바른 숫자를 입력해주세요");
        } else {
            const strCnt = checkStrike(comNums, userNums);
            const ballCnt = checkBall(comNums, userNums);

            if (strCnt === 3) setCorAnswer();
            else setWrongAnswer();
            return getResult(strCnt, ballCnt);
        }
    };

    const setCorAnswer = function () {
        document
            .getElementById("game-restart-button")
            .addEventListener("click", function () {
                comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
                $userNums.value = "";
            });
        $success.style.display = "block";
        $result.style.display = "none";
    };

    const setWrongAnswer = function () {
        $success.style.display = "none";
        $result.style.display = "block";
    };

    const getResult = function (strCnt, ballCnt) {
        if (strCnt === 0 && ballCnt === 0) return "낫싱";
        else if (strCnt === 0) return `${ballCnt}볼`;
        else if (ballCnt === 0) return `${strCnt}스트라이크`;
        else return `${ballCnt}볼 ${strCnt}스트라이크`;
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
        userNums.forEach((element) => {
            if (Number.isNaN(Number(element))) isPass = true;
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

new BaseballGame();
