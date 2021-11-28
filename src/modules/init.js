import { $buttonSubmit, $userInput, $result } from "../assets/domElement.js";

export function generateRandomNumbers() {
  const firstNum = MissionUtils.Random.pickNumberInRange(1, 9);
  let secondNum = 0;
  let lastNum = 0;
  while (true) {
    secondNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (firstNum != lastNum) break;
  }
  while (true) {
    lastNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (lastNum != firstNum && lastNum != secondNum) break;
  }
  return 100 * firstNum + 10 * secondNum + lastNum;
}

export function init() {
  $result.innerHTML = null;
}
