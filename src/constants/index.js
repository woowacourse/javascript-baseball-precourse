export const BASEBALL = Object.freeze({
  DIGIT: 3, // 자리수
  ZERO: 0,
  START: 1,
  END: 9,
});

export const ERROR_MESSAGES = Object.freeze({
  'not-enough-value': `입력 값을 확인해주세요.\n필요 자리수 : ${BASEBALL.DIGIT}`,
  'invalid-value': '옳지 못한 값입니다.',
  'included-zero': '0을 제외하고 입력해주세요.',
  'is-duplicated-value': '중복된 값은 입력될 수 없습니다.',
});
