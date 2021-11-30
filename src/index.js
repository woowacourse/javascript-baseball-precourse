import { getComputerNumber,
    getUserInput,
    getStrikeBallNum} from './game.js';


export default class BaseballGame {
    constructor(){
        this.computerInputNumbers=getComputerNumber();
        this.userInputNumbers=getUserInput();
        this.button =document.querySelector("button");
        this.result=document.getElementById("result");
        this.button.addEventListener('click',start);
    }

    start(e){
        e.preventDefault();
    }

    play(computerInputNumbers, userInputNumbers) {
          return "결과 값 String";
    }
}





  


