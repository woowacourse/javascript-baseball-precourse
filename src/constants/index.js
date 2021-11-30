export const GAME_RULE = {
  rangeMin: 1,
  rangeMax: 9,
  numberLength: 3,
};

export const ALERT_MESSAGE = {
  isMatchLength: `길이가 ${GAME_RULE.numberLength}인 수를 입력해주세요.`, // 입력이 3글자가 아닐 때 메시지
  isNumeric: '숫자가 아닌 문자를 제거해주세요.', // 입력에 숫자가 아닌 문자가 포함될 때 메시지
  isDuplicated: '중복된 수가 존재합니다. 다시 입력해주세요.', // 입력에 중복된 수가 들어가있을 때 메시지
  isOutOfRange: '각각 1~9 사이의 수를 입력해주세요.',
};

export const RESULT_MESSAGE = {
  nothing: '낫싱', // 하나도 맞추지 못했을 때 메시지
  clear: '🎉<strong>정답을 맞추셨습니다!</strong>🎉', // 정답 맞췄을 때 메시지
  restart: '<strong>게임을 새로 시작하시겠습니까? </strong>', // 게임 재시작 메시지
};
