export default function printResult(ballCount, strikeCount) {
  let returnMessage = "";

  if (strikeCount === 3) {
    returnMessage = returnMessage.concat(`
      <b>🎉정답을 맞추셨습니다!🎉</b> <br /> 게임을 새로 시작하시겠습니까?
    `);
  } else if (ballCount !== 0 && strikeCount !== 0) {
    returnMessage = returnMessage.concat(`${ballCount}볼 ${strikeCount}스트라이크`);
  } else if (ballCount !== 0) {
    returnMessage = returnMessage.concat(`${ballCount}볼`);
  } else if (strikeCount !== 0) {
    returnMessage = returnMessage.concat(`${strikeCount}스트라이크`);
  } else if (ballCount === 0 && strikeCount === 0) {
    returnMessage = returnMessage.concat("낫싱");
  }

  document.getElementById("result").innerHTML = returnMessage;

  return returnMessage;
}

export function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("user-input").value = "";
}

export function makeRestartBtn() {
  const button = document.createElement("button");

  button.innerHTML = "게임 재시작";
  button.id = "game-restart-button";

  document.getElementById("result").appendChild(button);
}
