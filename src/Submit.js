import { createUserInputNumbers } from './Numbers.js';
import checkInputValidation from './Check.js';

function onInvalidInputSubmit() {
  // eslint-disable-next-line no-alert
  alert('잘못 입력하셨습니다. 1~9까지의 수를 중복 없이 3개 입력해 주세요.');
  document.getElementById('user-input').value = '';
}

function onValidInputSubmit(userInputNumbers) {
  const result = window.play(window.computerInputNumbers, userInputNumbers);
  document.getElementById('result').innerText = result;
}

export default function onInputSubmit(e) {
  e.preventDefault();
  const userInputNumbers = createUserInputNumbers();
  const validation = checkInputValidation(userInputNumbers);

  if (!validation) {
    onInvalidInputSubmit();
  } else {
    onValidInputSubmit(userInputNumbers);
  }
}
