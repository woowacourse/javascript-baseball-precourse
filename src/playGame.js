const button = document.getElementById("submit");
const userInput = document.getElementById("user-input");

function checkValidValue(targetValue) {
  if (targetValue.length !== 3) {
    return false;
  }
  if (isNaN(Number(targetValue))) {
    return false;
  }
  if ([...targetValue].includes("0")) {
    return false;
  }
  if (new Set([...targetValue]).size !== 3) {
    return false;
  }
  return true;
}

const checkUserInputValue = event => {
  event.preventDefault();
  const isValidValue = checkValidValue(userInput.value);
  console.log(isValidValue);
};

export function playGame(computerInputNumbers) {
  button.addEventListener("click", checkUserInputValue);
}
