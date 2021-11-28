import { $userInput } from "../constants/constants.js";

const validLength = () => $userInput.value.length === 3;
const validNumber = () => $userInput.value.match(/[1-9]{3}/g);
const checkOverlap = () => new Set($userInput.value.split("")).size === 3;

export default function validUserInput() {
  if (!validLength() || !validNumber() || !checkOverlap()) {
    alert("1에서 9까지 서로 다른 임의의 수 3개를 입력해 주세요");
    $userInput.value = "";
    $userInput.focus();
    return;
  } else {
    return $userInput.value;
  }
}
