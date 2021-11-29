/**
 * 입력받은 텍스트가 조건을 만족하는 확인하는 메소드
 * @param {String} numberText 
 * @returns {String} numberText
 */
function validateInputNumber(numberText) {
  const answerLength = 3;
  
  if (!Number(numberText) || numberText.length !== answerLength){
    alert("숫자 3자리를 입력하세요");
    return false;
  }
  
  if (new Set(numberText).size < answerLength || numberText.includes("0")){
    alert("1~9까지 중복되지 않게 입력해주세요");
    return false;
  }
  
  return true;
}

/**
 * 정답과 입력값을 비교하여 스트라이크, 볼의 수를 담은 객체 반환 메소드
 * @param {Number Array} answerNumbers 
 * @param {Number Array} inputNumbers 
 * @returns {Object} result {strike, ball}
 */
function checkStrikeAndBall(answerNumbers, inputNumbers) {
  let result = { "strike": 0, "ball": 0 };
  
  inputNumbers.forEach((item, index) => {
    if (answerNumbers[index] === item) {
      result.strike += 1;
    } else if (answerNumbers.includes(item)) {
      result.ball += 1;
    }
  });
  
  return result;
}

/**
 * 숫자를 받아, 한 자리씩 분리한 리스트를 반환하는 메소드
 * @param {Number} number 
 * @returns {Number Array} number list
 */
function changeNumberToNumList(number) {
  const numberString = String(number);
  const numberList = numberString.split("").map(numChar => Number(numChar));
  return numberList;
}