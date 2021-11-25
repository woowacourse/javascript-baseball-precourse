import getComputerInputNumbers from "./utils/getComputerInputNumbers.js";

const initialState = {
  computerInputNumbers: getComputerInputNumbers(),
  userInputNumbers: [],
  balls: 0,
  strikes: 0,
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log("play----------", computerInputNumbers, userInputNumbers);
    return "결과 값 String";
  };
}

new BaseballGame();
