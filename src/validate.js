import { LENGTH, INPUT_ERROR, $input } from "./constant.js";

export default function validate(userNum) {
  if (!isThreeDigit(userNum) || !isNumber(userNum) || !isUnique(userNum)) {
    alert(INPUT_ERROR);
    $input.value = "";
    $input.focus();
    return false;
  }
  return true;
}

const isThreeDigit = (userNum) => userNum.length === LENGTH;
const isNumber = (userNum) => new RegExp(/[1-9]{3}/).test(userNum);
const isUnique = (userNum) => new Set(userNum).size === LENGTH;
