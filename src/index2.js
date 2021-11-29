import BaseballGame from "./index.js";
window.onload = function () {
    // 랜덤으로 생성된 숫자 여기에 얻기 && 입력되는 값 여기에 얻기... 이게 제일 어렵네...
    let comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    const baseballGame = new BaseballGame();
    const userNums = document.getElementById("user-input").value;
    const result = document.getElementById("result");
    const restartBtn = document.getElementById("game-restart-button");
    const submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        result.innerHTML = baseballGame.play(comNums, userNums);
    });
    restartBtn.addEventListener("click", function () {
        comNums = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    });
};
