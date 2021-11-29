import { $ } from "../util/selector.js";
const $result = $("#result");

const renderFailMessage = (message) => {
  $result.innerText = message;
};

const renderSuccessMessage = () => {
  $result.innerHTML = `
    <div>🎉 정답을 맞추셨습니다! 🎉</div>
    <br />
    <div>
      게임을 새로 시작하시겠습니까?
      <button id="game-restart-button">재시작</button>
    </div>
  `;
};

export const renderResult = (isSuccess, message = "") => {
  const result = isSuccess
    ? renderSuccessMessage()
    : renderFailMessage(message);
  return result;
};
