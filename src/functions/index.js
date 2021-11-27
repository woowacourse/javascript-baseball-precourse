import constants from '../constants/index.js'

/**
 * @param {String} value 유저가 입력한 값
 * @param {Array} numRange 길이가 2인 배열. [startInclusive, endInclusive]. 배열 안 숫자가 [0-9]라고 가정.
 * @param {Number} numDigit 총 자리수
 * @returns {[Boolean, String]} 길이가 2인 배열. input valid 여부와 invalid일 경우 에러 메세지 리턴.
 */
export function checkValidUserInput(value, numRange, numDigit){
  const message = getInvalidMessage(value, numRange, numDigit)
  return [message.length === 0, message]
}

/**
 * @param {String} value 유저가 입력한 값
 * @param {Array} numRange 길이가 2인 배열. [startInclusive, endInclusive]. 배열 안 숫자가 [0-9]라고 가정.
 * @param {Number} numDigit 총 자리수
 * @returns {[Boolean, String]} invalid 값인 경우 에러 메세지 리턴. valid할 경우 '' 리턴.
 */
function getInvalidMessage(value, numRange, numDigit){
  if (isNaN(value)) return constants.NAN_ERROR_MSG;
  if (isInvalidLength(value, numDigit)) return constants.LENGTH_ERROR_MSG;
  if (hasNumOutOfRange(value, numRange)) return constants.RANGE_ERROR_MSG;
  if (hasDuplicates(value)) return constants.DUPLICATE_ERROR_MSG;
  return ''
}

/**
 * @param {String} value 유저가 입력한 값
 * @param {Number} numDigit 총 자리수
 * @returns {[Boolean, String]} value 길이와 numDigit이 일치할 경우 true. 아니면 false.
 */
function isInvalidLength(value, numDigit){
  return value.length !== numDigit;
}

/**
 * @param {String} value 유저가 입력한 값
 * @param {Array} numRange 길이가 2인 배열. [startInclusive, endInclusive]. 배열 안 숫자가 [0-9]라고 가정.
 * @returns {Boolean} 자릿값 중 numRange에 속하지 않으면 true. 아니면 false.
 */
function hasNumOutOfRange(value, numRange){
  return !(value.match(`^[${numRange[0]}-${numRange[1]}]+$`))
}

/**
 * @param {String} value 유저가 입력한 값
 * @returns {[boolean, String]} 반복값 있을 경우 true. 아니면 false.
 */
function hasDuplicates(value){
  return new Set([...value]).size !== value.length
}