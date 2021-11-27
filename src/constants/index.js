// 게임 조건
const GAME_NUM_RANGE = [1,9];
const GAME_NUM_DIGIT = 3;

// 에러 메세지
const NAN_ERROR_MSG = 'The input contains non-numeric character.';
const LENGTH_ERROR_MSG = 'The input does not match the required length.';
const RANGE_ERROR_MSG = 'The input contains a digit that is out of the range.';
const DUPLICATE_ERROR_MSG = 'The input has a duplicated value.'

export default {
  GAME_NUM_RANGE,
  GAME_NUM_DIGIT,
  NAN_ERROR_MSG,
  LENGTH_ERROR_MSG,
  RANGE_ERROR_MSG,
  DUPLICATE_ERROR_MSG
}