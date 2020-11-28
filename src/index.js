export default function BaseballGame() {
  const submitButton = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");

  const play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";
  };

  const gameStart = () => {
    console.log("game start!");
  };

  const init = () => {
    submitButton.addEventListener("click", () => gameStart());
    userInput.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        gameStart();
      }
    });
  };

  init();
}

new BaseballGame();
