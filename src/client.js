const $userInput = document.getElementById("user-input");
const $submit = document.getElementById("submit");
const $result = document.getElementById("result");
const $gameEnd = document.getElementById("game-end");

export const $getUserInputValue = () => {
  return $userInput.value;
};

export const $setResultText = (resultString) => {
  $result.innerHTML = resultString;
};

export const $addSubmitButtonOnClick = (onClick) => {
  $submit.addEventListener("click", (e) => {
    e.preventDefault();
    onClick(e);
  });
};

export const $hideResultElement = () => {
  $result.style.display = "none";
};

export const $showResultElement = () => {
  $result.style.display = "block";
};

export const $hideGameEndElement = () => {
  $gameEnd.style.display = "none";
};

export const $showGameEndElement = () => {
  $gameEnd.style.display = "block";
};
