export const DOMS = {
  $result: document.querySelector("#result"),
  $userInput: document.querySelector("#user-input"),
  $userInputForm: document.querySelector("form"),
};

export const BASEBALL_NUMBER_LENGTH = 3;

export const ANSWER_RANGE = {
  MIN: 1,
  MAX: 9,
};

export const ALERT_MESSAGE = {
  ONLY_NUMBER: "숫자만 입력해주세요",
  ONLY_THREE_DIGIT: "3자리수의 숫자를 입력해주세요",
  ONLY_NON_DUPLICATED_NUMBER: "중복되지 않은 숫자들로 입력해주세요",
  NOT_INCLUDED_ZERO: "1 ~ 9사이의 숫자로 입력해주세요",
};

export const CORRECT_MESSAGE_TEMPLETE = `
  <div>
    <div>
      <strong>🎉정답을 맞추셨습니다🎉</strong>
    </div>
    <span>게임을 새로 시작하시겠습니까?</span>
    <button id="game-restart-button">게임 재시작</button>
  </div>
`;
