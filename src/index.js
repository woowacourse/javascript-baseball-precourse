import { BASEBALL } from './constants.js';
import { getRandom } from './functions/RandomNum.js';
import { checkNum } from './functions/UserNumCheck.js';
import { getBallCount, getStrikeCount, getResultText } from './functions/CountResult.js';

export default function BaseballGame() {
  const submitBtn = document.getElementById('submit');
  const userInput = document.getElementById('user-input');
  const resultDiv = document.getElementById('result');
  const restartDiv = document.getElementById('restart');
  const restartBtn = document.getElementById('game-restart-button');

  let computerInputNumbers = getRandom();

  // 사용자 수 입력받기
  const getUserNum = () => {
    const userInputNumbers = userInput.value;

    if (checkNum(userInputNumbers)) {
      return userInputNumbers;
    }
  };

  // play 함수
  this.play = (computerInputNumbers, userInputNumbers) => {
    let resultText = "";

    const ballCount = getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
    
    resultText = getResultText(strikeCount, ballCount);
    return resultText;
  };


  // 게임 결과 렌더링 함수
  const showResult = result => {
    resultDiv.innerHTML = result;

    if (result === BASEBALL.ANSWER) {
      restartDiv.style.visibility = 'visible';
    }
  };

  // 확인 버튼으로 게임 시작
  const startGame = () => {
    let userNum = getUserNum();
    let result = '';

    if (userNum !== undefined) {
      console.log(computerInputNumbers);
      result = this.play(computerInputNumbers, userNum);
    }
    showResult(result);
    
    return result;
  };

  // 게임 재시작 버튼으로 게임 재시작
  const restartGame = () => {
    restartDiv.style.visibility = 'hidden';
    userInput.value = '';
    resultDiv.innerText = '';

    computerInputNumbers = getRandom();
  };

  submitBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);
}

new BaseballGame();
