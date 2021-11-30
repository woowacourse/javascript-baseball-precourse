import { ANSWER, ANSWER_MESSAGE } from "../constants/index.js";
import { $ } from "../util/index.js";

const renderGameResult = (gameResult) => {
  if (gameResult === ANSWER) {
    $("#result").innerHTML = ANSWER_MESSAGE;
    return;
  }

  $("#result").innerText = gameResult;
  return;
};

export default renderGameResult;
