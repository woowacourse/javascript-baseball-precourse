import { state } from './state/index.js';
import makeRandomNumber from './functions/make-random-number.js';
import checkUserInputValid from './functions/check-user-input-valid.js';

export default function BaseballGame() {
  const submitButton = document.getElementById('submit');
  state.computerInput = makeRandomNumber();

  submitButton.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const userInputArray = userInput.split('');
    const userInputSet = [...new Set(userInputArray)];
    if(checkUserInputValid(userInput, userInputArray, userInputSet)){
        alert("올바른 입력 정보")
    }else{
        alert("올바르지 않은 입력 정보")
    }
  });
}

new BaseballGame();
