import { setNumber } from './setNumber.js.js'
import { checkNumber } from './checkValid.js'
import { checkResult, showRestartGameButton } from './checkResult.js';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    const resultDiv = document.getElementById("result")
    const userValidNumber = checkNumber(userInputNumbers);console.log(computerInputNumbers, userValidNumber)
    const resultText = checkResult(computerInputNumbers, userValidNumber)
    showRestartGameButton(resultText)
    resultDiv.textContent = resultText

    return resultText;
  };
}

setNumber();