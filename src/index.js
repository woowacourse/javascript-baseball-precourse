import { clearResultArea } from "./clearResultArea.js";
import { makeNumbers } from "./makeNumbers.js";

function baseBallGameStart() {
  clearResultArea();
  const computerInputNumbers = makeNumbers();
  // playGame(computerInputNumbers);
}

baseBallGameStart();
