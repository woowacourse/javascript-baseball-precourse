function isRightNumber(userInputs) {
  // userInput이 1~9 사이 숫자인지 체크
  for (let i = 0; i < userInputs.length; i += 1) {
    const userInput = userInputs[i];
    const userInputAsciiCodeNumber = userInput.charCodeAt();
    if (userInputAsciiCodeNumber <= 48 || userInputAsciiCodeNumber > 57) {
      return false;
    }
  }
  return true;
}

function isRightLength(userInputs) {
  // userInput.length 체크
  if (userInputs.length !== 3) {
    return false;
  }
  return true;
}

function checkTheRightUserInput(userInputs) {
  if (!isRightLength(userInputs) || !isRightNumber(userInputs)) {
    console.log('공백 없이 중복되지 않는 숫자 3개를 입력해주세요!');
  }
}

export default function getUserInputNumbers() {
  const $userInput = document.querySelector('#user-input');
  const $submit = document.querySelector('#submit');

  $submit.addEventListener('click', (event) => {
    event.preventDefault();
    const userInputs = $userInput.value;
    checkTheRightUserInput(userInputs);
  });
}
