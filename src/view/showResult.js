import { ANSWER } from "../game/getGameResult.js";

function renderAskRestartView() {
  const $resultDiv = document.getElementById("result");
  $resultDiv.innerHTML = `
    <div>🎉<strong>정답을 맞추셨습니다!</strong>🎉</div>
    <span>게임을 새로 시작하시겠습니까?</span>
    <button id="game-restart-button">게임 재시작</button>
  `;
}

export default function showResult(resultString) {
  if (resultString === ANSWER) {
    renderAskRestartView();
    return;
  }
  const $resultDiv = document.getElementById("result");
  $resultDiv.innerText = resultString;
}
