import {$} from './dom/dom.js';
import getComputerNumbers from "./modules/getComputerNumbers.js";
import getUserNumbers from './modules/getUserNumbers.js';
import getPlayResultCount from './modules/getPlayResultCount.js';
import getResultString from './modules/getResultString.js';
import printGamePlayResult from './modules/printGamePlayResult.js';
import printGameEndResult from './modules/printGameEndResult.js';

export default function BaseballGame() {
  //user가 입력한 값과, 컴퓨터가 생성한 값들을 담을 객체
  this.gameInfoObject = {
    computerInputNumbers : [],
    userInputNumbers: [],
  }
  
  //init 초기화 작업 
  this.init = () => {
    this.gameInfoObject.computerInputNumbers = getComputerNumbers();
    initEventListener();
  }
  
  this.play = function (computerInputNumbers, userInputNumbers) {    
      const result = getPlayResultCount(computerInputNumbers, userInputNumbers);
      const ballCount = result[0];
      const strikeCount = result[1];
      //ballCount와 strikeCount에 따른 결과값을 String타입의 데이터로 반환한다
      return getResultString(ballCount,strikeCount);
  };

  

  const playGame = () => {
      //유저가 입력한 값 받아오기
      this.gameInfoObject.userInputNumbers = getUserNumbers($('#user-input').value);
      if(this.gameInfoObject.userInputNumbers !== ""){
        let compareResult = this.play(this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers);
        console.log(compareResult, this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers)
        if(compareResult == 'gameEnd'){
          printGameEndResult();
          addResetButtonListener();
        }else if(compareResult !== 'gameEnd'){
          printGamePlayResult(compareResult);
        }
      }
      return;
  }
  
  const addResetButtonListener = () => {
    $('#game-restart-button').addEventListener("click", () =>{
      console.log('restart버튼 눌러짐')
    })
  }
  const initEventListener = () => {
    $('#user-input-form').addEventListener("submit",(e) =>{
      e.prevetDefault();
    })
    //user가 submit버튼 클릭시 playGame 함수 실행 
    $('#submit').addEventListener("click", playGame);
    
  }
}

const baseballGamePlay = new BaseballGame();
baseballGamePlay.init();