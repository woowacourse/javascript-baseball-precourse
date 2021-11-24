import { getUserInput } from "./utils/getUserInput.js";
import { getValidatedInput } from "./utils/getValidatedInput.js";
export default function BaseballGame() {
    this.play = function (computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    };
    const button = document.querySelector('#submit');
    const userInput = document.querySelector('#user-input').value;

    button.addEventListener('click', (e) => {
      e.preventDefault();
      getValidatedInput(userInput)
    })
   
  }

  new BaseballGame();