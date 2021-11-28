export const ANSWER_LENGTH = 3;

export const ELEMENT_IDS = {
  USER_INPUT: 'user-input',
  SUBMIT: 'submit',
  RESULT: 'result',
  RESTART: 'game-restart-button'
};

export const INPUT_ERROR_MESSAGE = `1~9까지의 수를 중복없이 ${ANSWER_LENGTH}개 입력해주세요`;

export const GAME_CLEAR_VIEW_HTML = `
  <div>🎉정답을 맞추셨습니다!🎉</div>
  <div>게임을 새로 시작하시겠습니까?  <button type="button" id="${ELEMENT_IDS.RESTART}">게임 재시작</button></div>
`;
