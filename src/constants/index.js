const ANSWER = "정답";
const STRIKE = "스트라이크";
const BALL = "볼";
const NOTHING = "낫싱";

const ANSWER_MESSAGE = `
  <strong>정답을 맞추셨습니다!!!</strong> 
  <br/>
  게임을 새로 시작하시겠습니까? 
  <button id="game-restart-button">재시작</button>
`;
const DUPLICATE_ERROR_MESSAGE =
  "중복이 없는 서로 다른 숫자를 입력해주세요. (올바른 예시 :139)";
const SCOPE_ERROR_MESSAGE =
  "1~9 사이의 숫자를 입력해주세요. (올바른 예시 :139)";
const LENGTH_ERROR_MESSAGE = "3자리의 수를 입력해주세요. (올바른 예시 :139)";

const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const GAME_NUMBER_LENGTH = 3;

export {
  ANSWER,
  STRIKE,
  BALL,
  NOTHING,
  ANSWER_MESSAGE,
  DUPLICATE_ERROR_MESSAGE,
  SCOPE_ERROR_MESSAGE,
  LENGTH_ERROR_MESSAGE,
  MIN_NUMBER,
  MAX_NUMBER,
  GAME_NUMBER_LENGTH,
};
