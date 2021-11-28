import { $ } from "../util/index.js";

const renderGameResult = (game_result) => {
  if (game_result === "정답") {
    $("#result").innerHTML = `
      <div>정답을 맞추셨습니다!</div>
      게임을 새로 시작하시겠습니까? 
      <button id="game-restart-button">재시작</button>
    `;
    return;
  }

  $("#result").innerText = game_result;
  return;
};

export default renderGameResult;
