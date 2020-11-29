import playGame from "./game-play.js";
import randomNumberMaker from "./random-number-maker.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {

    return "결과 값 String";
  };
}

const state = { 'randomNumber' : '', 'givenNumberLength' : 3 };

function init() {
  const givenNumberLength = state.givenNumberLength;
  const randomNumberArray = randomNumberMaker(givenNumberLength);
  state.randomNumber = randomNumberArray;
}

init();

document.getElementById('submit').addEventListener('click', () => {  
  playGame(state);
})

new BaseballGame();
// BaseballGame.play(computerInputNumbers, computerInputNumbers);

// const baseballGame = new BaseballGame();
// baseballGame.play();
