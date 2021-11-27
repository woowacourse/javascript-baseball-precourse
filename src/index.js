import { clearResultArea } from "./clearResultArea.js";
import { makeNumbers } from "./makeNumbers.js";
import { playGame } from "./playGame.js";

function baseBallGameStart() {
  clearResultArea();
  const computerInputNumbers = makeNumbers();
  playGame(computerInputNumbers);
}

baseBallGameStart();
