export const INVALID_MESSAGE = {
  EMPTY_VALUE: '값을 입력하세요',
  NOT_THREE_DEGIT: '3자리 값을 입력하세요',
  NOT_VALID: '1-9 범위의 숫자를 입력하세요',
  DUPLICATED_VALUE: '중복되지 않는 숫자를 입력하세요',
};

export const MAX_INPUT_LENGTH = 3;
export const COMPUTER_NUMBER_RANGE = {
  MIN : 1,
  MAX : 9
};

export const ANSWER_HTML = `
  <div>
    <p> 🎉 정답을 맞추셨습니다! 🎉</p>
    <button id="game-restart-button">재시작</button>
  </div>
`;
