export default function printMessage(ballCount, strikeCount) {
  let RETURN_MESSAGE = '';

  if (strikeCount === 3) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`🎉정답을 맞추셨습니다!🎉`);

  } else if (ballCount !== 0 && strikeCount !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${ballCount}볼 ${strikeCount}스트라이크`);

  } else if (ballCount !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${ballCount}볼`);

  } else if (strikeCount !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${strikeCount}스트라이크`);

  } else if (ballCount === 0 && strikeCount === 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat("낫싱");

  } 
  
  document.getElementById('result').innerHTML = RETURN_MESSAGE;
}
  
export function clearResult() {
  document.getElementById('result').innerHTML = '';
}