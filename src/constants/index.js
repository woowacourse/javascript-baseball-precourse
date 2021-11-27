// 게임 조건
const GAME_NUM_RANGE = [1,9];
const GAME_NUM_DIGIT = 3;

// 에러 메세지
const NAN_ERROR_MSG = 'The input contains non-numeric character.';
const LENGTH_ERROR_MSG = 'The input does not match the required length.';
const RANGE_ERROR_MSG = 'The input contains a digit that is out of the range.';
const DUPLICATE_ERROR_MSG = 'The input has a duplicated value.';

// 결과 메세지
const NOTHING_MSG = '낫싱';
const STRIKE_MSG = '스트라이크';
const BALL_MSG = '볼';

// HTML 텍스트
const WIN_MESSAGE = '<b>🎉 정답을 맞추셨습니다! 🎉</b> <br /><br /> 게임을 재시작 하시겠습니까?  ';
const RESTART_GAME = '게임 재시작';

export default {
  GAME_NUM_RANGE,
  GAME_NUM_DIGIT,
  NAN_ERROR_MSG,
  LENGTH_ERROR_MSG,
  RANGE_ERROR_MSG,
  DUPLICATE_ERROR_MSG,
  NOTHING_MSG,
  STRIKE_MSG,
  BALL_MSG,
  WIN_MESSAGE,
  RESTART_GAME,
};