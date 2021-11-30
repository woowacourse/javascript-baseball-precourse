import { $userInput, $submit, $result, TEXT } from './constants.js';
import { setButton } from './restart.js';

//create result String
export function createResult(resultArr) {
  let resultStr = "";

  if (resultArr[0] === 3) {
    resultStr = TEXT.CORRECT;
    setButton();
  }
  else if (resultArr[0] === 0 && resultArr[1] === 0) {
    resultStr = TEXT.NOTHING;
  }
  else {
    if (resultArr[0] !== 0) resultStr = `${resultArr[0]}${TEXT.STRIKE}`;
    if (resultArr[1] !== 0) resultStr += ` ${resultArr[0]}${TEXT.BALL}`;
  }

  return resultStr;
}

//set Result in DOM & restart button show
//resultArr = [strike, ball]
export function setResult(resultArr) {
    const resultStr = createResult(resultArr);
    $result.innerHTML = resultStr;
}