import {$} from './dom/dom.js';
import getComputerNumbers from "./modules/getComputerNumbers.js";
import getUserNumbers from './modules/getUserNumbers.js';
import getStrikeBallCount from './modules/getStrikeBallCount.js';
import getPlayGameResultString from './modules/getPlayGameResultString.js';
import printGamePlayResult from './modules/printGamePlayResult.js';
import printGameEndResult from './modules/printGameEndResult.js';

export default function BaseballGame() {
  //user가 입력한 값과, 컴퓨터가 생성한 값들을 담을 객체
  this.gameInfoObject = {
    computerInputNumbers : [],
    userInputNumbers: [],
  }
  
  //브라우저 처음 열 때에 컴퓨터 값 생성 + event들 등록  
  this.init = () => {
    this.gameInfoObject.computerInputNumbers = getComputerNumbers();
    initEventListener();
  }
  
  
  this.play = function (computerInputNumbers, userInputNumbers) {    
      const result = getStrikeBallCount(computerInputNumbers, userInputNumbers);
      const ballCount = result[0];
      const strikeCount = result[1];
      return getPlayGameResultString(ballCount,strikeCount);
  };

  

  const playGame = () => {
      this.gameInfoObject.userInputNumbers = getUserNumbers($('#user-input').value);
      //유저가 입력한 값이 유효할 때에만 다음 단계 함수들 진행
      if(this.gameInfoObject.userInputNumbers !== false){
        const compareResult = this.play(this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers);
        if(compareResult == 'gameEnd'){
          printGameEndResult();
          addResetButtonListener();
        }else if(compareResult !== 'gameEnd'){
          printGamePlayResult(compareResult);
        }
      }
      return;
  }

  const restartGame = () => {
    this.gameInfoObject.computerInputNumbers = getComputerNumbers();
    $('#result').innerText = '';
    $('#user-input').value = '';
  }

  const initEventListener = () => {
    $('#user-input-form').addEventListener("submit",(e) =>{
      e.prevetDefault();
    })
    $('#submit').addEventListener("click", playGame);
    
  }

  const addResetButtonListener = () => {
    $('#game-restart-button').addEventListener("click", restartGame);
  }
}

const baseballGamePlay = new BaseballGame();
baseballGamePlay.init();