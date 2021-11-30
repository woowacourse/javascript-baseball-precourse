import { $input, $button,$resultItem,GAME_WIN_MESSAGE} from './constant.js';
import { 
    getComputerNumber,
    getUserInput,
    getStrikeBallNum,
    makeResult} from './game.js';

export default class BaseballGame {
   
    constructor(){
        this.computerInputNumbers=getComputerNumber();
        this.start();
    }

    restart(){
        const $restart=document.getElementById("game-restart-button");
        $restart.addEventListener("click",(e)=>{
            e.preventDefault();
            this.computerInputNumbers=getComputerNumber();
            $input.value='';
            $resultItem.innerHTML='';
        })
    }

    start(){          
        $button.addEventListener('click',(e)=>{
            e.preventDefault();
            const userInputNumbers=getUserInput();
            console.log(this.computerInputNumbers);
            $resultItem.innerHTML=this.play(this.computerInputNumbers,userInputNumbers);
            if($resultItem.innerHTML==GAME_WIN_MESSAGE) this.restart();
        })           
    }


    play(computerInputNumbers, userInputNumbers) {
          const [ ballCount,strikeCount ]= getStrikeBallNum(computerInputNumbers,userInputNumbers);
          const result = makeResult(ballCount,strikeCount);
          console.log(result);
          return result;
    }
}


new BaseballGame();

  


