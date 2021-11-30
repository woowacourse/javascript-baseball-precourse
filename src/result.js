import { $userInput, $submit, $result } from './constants.js';

//create result String
export function createResult() {
  
}

//set Result in DOM & restart button show
//resultArr = [strike, ball]
export function setResult(resultArr) {
    const resultStr = createResult(resultArr);
    $result.innerHTML = resultStr;
}