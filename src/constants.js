export const BASEBALL_RULE = {
  DIGITS: 3,
  MIN: 1,
  MAX: 9,
};

export const MESSAGE = {
  NOT_VALID_INPUT:
    '🚫 올바르지 않은 입력값 입니다! 1~9 사이의 서로 다른 숫자 3자리를 넣어주세요!',
};

const RESTART_VIEW = `
  <p>🎉 정답을 맞추셨습니다 🎉</p>
  <span> 게임을 새로 시작하시겠습니까? </span>
  <button id="restart">게임 재시작</button>
`;

export const GAME_RESULT = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
  END: RESTART_VIEW,
};
