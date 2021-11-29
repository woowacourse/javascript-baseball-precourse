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