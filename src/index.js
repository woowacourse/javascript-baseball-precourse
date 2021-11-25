import { pickUniqueThreeNumbers } from './utils/index.js';

function BaseballGame () {
  this.answer = pickUniqueThreeNumbers();

  this.init = () => {
    console.log(this.answer);
  }
}

const baseballgame = new BaseballGame();
baseballgame.init();
