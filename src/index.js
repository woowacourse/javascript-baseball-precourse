import { INPUT_ERROR_MESSAGE, GAME_WIN_MESSAGE } from './constant.js';
import { getComputerNumber,
    getUserInput,
    getStrikeBallNum} from './game.js';



export default class BaseballGame {
    constructor(){
        this.computerInputNumbers=getComputerNumber();
        this.userInputNumbers=getUserInput();
        this.button =document.querySelector("button");
        this.button.addEventListener('click',playGame);
    }
    play(computerInputNumbers, userInputNumbers) {
          return "결과 값 String";
    }
}





  


