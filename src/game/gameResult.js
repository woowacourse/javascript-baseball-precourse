import { $result } from '../constants/constants.js';

const getStrikeCount = (computerInputNumbers, userInputNumbers) => {
  let strike = 0;
  computerInputNumbers.split('').forEach((num, index) => {
    if (num === userInputNumbers[index]) {
      strike++;
    }
  });
  return strike;
};

const getBallCount = (computerInputNumbers, userInputNumbers) => {
  let ball = 0;
  computerInputNumbers.split('').forEach((num, index) => {
    if (num !== userInputNumbers[index] && userInputNumbers.includes(num)) {
      ball++;
    }
  });
  return ball;
};

const getGameResult = (computerInputNumbers, userInputNumbers) => {
  const strikeCounts = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCounts = getBallCount(computerInputNumbers, userInputNumbers);

  if (strikeCounts === 3) return '종료';
  if (!strikeCounts && !ballCounts) return '낫싱';
  if (!strikeCounts && ballCounts) return `${ballCounts}볼`;
  if (strikeCounts && !ballCounts) return `${strikeCounts}스트라이크`;
  if (strikeCounts && ballCounts) return `${ballCounts}볼 ${strikeCounts}스트라이크`;
};

const showWinResult = () => {
  $result.innerHTML = `
    <h3>🎉 정답을 맞추셨습니다. 🎉</h3>
    <p>게임을 새로 시작하시겠습니까?<button id="game-restart-button">재시작</button></p>
  `;
};
