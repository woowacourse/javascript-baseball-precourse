import { gameCount } from './utils/gameCount.js';

export function gameResult(computerInput, userInput) {
  const result = document.querySelector('#result');
  const [strikeCount, ballCount] = gameCount(computerInput, userInput);
  if (!(strikeCount === 0 && ballCount === 0)) {
    if (strikeCount === 3) {
      result.innerHTML =
        '🎉정답을 맞추셨습니다!🎉 <br><br> 게임을 재시작 하시겠습니까?  ';
      const restartButton = document.createElement('button');
      restartButton.id = 'game-restart-button';
      restartButton.textContent = '게임 재시작';
      result.appendChild(restartButton);
    } else if (strikeCount === 0) {
      result.innerHTML = `${ballCount}볼`;
    } else if (ballCount === 0) {
      result.innerHTML = `${strikeCount}스트라이크`;
    } else {
      result.innerHTML = `${ballCount}볼 ${strikeCount}스트라이크`;
    }
  } else {
    result.innerHTML = '낫싱';
  }
}
