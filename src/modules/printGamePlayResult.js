import { $ } from "../dom/dom.js";

export default function printGamePlayResult(gameResult){
    if(gameResult === 'gameEnd'){
        printGameEnd();
    }else if(gameResult !== 'gameEnd'){
        $('#result').innerText = `${gameResult}`;
    }
    
}