export const NUMBER = {
  DIGIT: 3,
  START: 1,
  END: 9,
};

export const POINT = {
  ZERO: 0,
  ONE: 1,
};

export const ERROR = {
  REQUIRE_THREE_UNIQUE_NUMBERS: '🚨 1~9 사이의 서로 다른 숫자 세자리를 공백없이 입력해주세요',
  REQUIRE_NOT_DUPLICATE_NUMBERS: '🚨 숫자를 중복되지 않게 입력해주세요',
};

export const ANSWER = {
  RIGHT: '🎉 정답을 맞추셨습니다! 🎉',
  NOTHING: '낫싱',
};

export const THREE_UNIQUE_NUMBERS_REGEX = /^[1-9]{3}$/;
