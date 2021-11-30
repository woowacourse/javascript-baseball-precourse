import { comNums, checkStrike, checkBall, getResult } from "./computer.js";
import { userInput, clearUserInput, checkUserNums } from "./user.js";

export default function BaseballGame() {
    if (!new.target) return new BaseballGame();
    this.comNums = comNums();
    this.userNums = userInput();
    this.$submit = document.querySelector("#submit");
    this.init = () => {
        this.$submit.addEventListener("click", function (e) {
            e.preventDefault();
            result.textContent = renderResult();
        });
        this.$submit.addEventListener("keyup", function (e) {
            e.preventDefault();
            if (e.key === "Enter") result.textContent = renderResult();
        });
    };
    const renderResult = () => {
        return this.play(this.comNums, this.userNums);
    };
    this.play = function (computerInputNumbers, userInputNumbers) {
        const comNum = (computerInputNumbers + "").split(",");
        const userNum = userInputNumbers;

        if (!checkUserNums(userNum)) {
            alert("올바른 숫자를 입력해주세요");
        } else {
            const strCnt = checkStrike(comNum, userNum);
            const ballCnt = checkBall(comNum, userNum);
            console.log(getResult(strCnt, ballCnt), ballCnt, strCnt);
            return getResult(strCnt, ballCnt);
        }
    };

    this.init();
}

new BaseballGame();
