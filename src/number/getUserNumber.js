import { $ } from "../util/index.js";

const getUserNumber = () => {
  const $userInput = $("#user-input").value;

  return $userInput;
};

export default getUserNumber;
