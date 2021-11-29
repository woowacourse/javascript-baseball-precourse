import { BASEBALL, EMPTY, ERROR_MESSAGES } from '../constants/index.js';

/**
 * DOM 선택자
 *
 * @param {String} selector
 * @returns {HTMLElement}
 */
export const $ = selector => document.querySelector(selector);

/**
 * value가 주어진 digit과 길이가 일치하는지 확인합니다.
 *
 * @param {String} value
 * @param {Number} digit
 * @returns {Boolean}
 */
export const isCorrectLength = (value, digit) => value.trim().length !== digit;

/**
 * value가 숫자형인지 확인합니다.
 * String, Boolean 등 명시적 타입 변환을 사용합니다.
 *
 * @param {String | Number | Boolean} value
 * @returns {Boolean}
 */
export const isNumber = value => !Number.isNaN(+value);

/**
 * value에 target이 포함되어 있는지 확인합니다.
 *
 * @param {String} value
 * @param {Strinb} target
 * @returns {Boolean}
 */
export const isIncludes = (value, target) => value.includes(target);

/**
 * 중복된 글자가 있는지 확인합니다.
 *
 * @param {String} value
 * @returns {Boolean}
 */
export const isDuplicateLetter = value => {
  const target = value.split(EMPTY);
  const converted = new Set(target);
  return target.length !== converted.size;
};

/**
 * alert에 출력할 에러 메세지를 설정합니다.
 *
 * @param {String} type
 * @returns {undefined} : Falsy
 */
export const setErrorMessage = type =>
  /* eslint-disable no-alert */
  alert(ERROR_MESSAGES[type]);

/**
 * 사용자가 입력한 값이 옳은지 검사하고, Boolean 결과를 반환합니다.
 *
 * @param {String}} value
 * @returns {Boolean}
 */
export const isInValid = value => {
  if (isCorrectLength(value, BASEBALL.DIGIT)) return !setErrorMessage('not-enough-value');
  if (!isNumber(value)) return !setErrorMessage('invalid-value');
  if (isIncludes(value, BASEBALL.ZERO)) return !setErrorMessage('included-zero');
  if (isDuplicateLetter(value)) return !setErrorMessage('is-duplicated-value');
  return false;
};

/**
 * 주어진 객체가 Number의 값을 가지고 있는지 확인합니다.
 * 만약 아니라면 constant의 상수 객체로 값을 설정하고, 없다면 0을 입력합니다.
 *
 * @param {Object} state : constants에 등록되어 있고, Number형인지 확인합니다.
 * @returns {Object}
 */
export const isNumberObject = state => {
  const newState = { ...state };
  Object.keys(newState).forEach(key => {
    if (!isNumber(newState[key])) newState[key] = BASEBALL[key.toUpperCase()] || 0;
  });
  return newState;
};
