export const NUMBER_RULE = {
  LENGTH: 3,
  DIGIT_MIN: 1,
  DIGIT_MAX: 9,
};

export const ERROR_MESSAGE = {
  NONE: "숫자를 입력해주세요.",
  NOT_THREE_DIGITS: "세 자리 수를 입력해주세요.",
  DUPLICATION: "중복된 수가 있습니다.",
  ZERO_INCLUDED: "0을 제외한 수를 입력해주세요.",
  SPACE_INCLUDED: "공백이 포함되어 있습니다.",
  CHAR_INCLUDED: "문자가 포함되어 있습니다. 다시 입력해주세요.",
};

export const RESULT_MESSAGE = {
  NOTHING: "낫싱",
  BALL: "볼",
  STRIKE: "스트라이크",
  CORRECT: `<h4>🎉 정답을 맞추셨습니다! 🎉</h4><span>게임을 새로 시작하시겠습니까? </span>`,
  RESTART: "게임 재시작",
};
