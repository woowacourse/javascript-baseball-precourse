import { $buttonSubmit, $userInput, $result } from "../assets/domElement.js";

export function generateRandomNumbers() {
  const firstNum = MissionUtils.Random.pickNumberInRange(1, 9);
  var secondNum = 0;
  var lastNum = 0;
  while (true) {
    var secondNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (firstNum != lastNum) break;
  }
  while (true) {
    var lastNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (lastNum != firstNum && lastNum != secondNum) break;
  }
  return 100 * firstNum + 10 * secondNum + lastNum;
}

export function init() {
  $result.innerHTML = null;
}
