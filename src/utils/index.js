import { RESULT_MESSAGE } from "../constants/index.js";

const myCreateElement = (tag, text) => {
    const htmlTag = document.createElement(tag);
    htmlTag.innerHTML = text;
  
    return htmlTag;
  };
  
  export const makeResultMessage = (computerInputNumbers, userInputNumbers, user) => {
    user.setBallStrike(computerInputNumbers, userInputNumbers);
    const resultMessage = user.makeText();
  
    return resultMessage;
  };
  
  const setResultDiv = (resultMessage, $result) => {
    $result.innerHTML = resultMessage;
  };
  
  const initGame = (computer, user) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    computer.setRandomNumber();
    user.$userInput.value = '';
    document.getElementById('submit').disabled = false;
  };
  
  const onRestartClick = (event, user, computer) => {
    event.preventDefault();
    user.initUser();
    initGame(computer, user);
  };
  
  const setRestartDiv = ($result, user, computer) => {
    const divTag = myCreateElement('div', '');
    const restartButton = myCreateElement('button', '게임 재시작');
  
    divTag.innerHTML = RESULT_MESSAGE.restart;
    restartButton.id = 'game-restart-button';
    restartButton.addEventListener('click', event => onRestartClick(event, user, computer));
    divTag.appendChild(restartButton);
    $result.appendChild(divTag);
  };
  
  export const gameResult = (resultMessage, user, computer) => {
    const $result = document.getElementById('result');
    setResultDiv(resultMessage, $result);
    if (user.strikeNum === 3) {
      setRestartDiv($result, user, computer);
      document.getElementById('submit').disabled = true;
    }
  };
  