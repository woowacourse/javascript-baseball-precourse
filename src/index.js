import {$} from './dom/dom.js';
import getComputerNumbers from "./modules/getComputerNumbers.js";
import getUserNumbers from './modules/getUserNumbers.js';
import getPlayResultCount from './modules/getPlayResultCount.js';

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
      if(ballCount === 0 && strikeCount === 0){
        return "낫싱"
      }
      if(ballCount !== 0 && strikeCount !== 0){
        return `${ballCount}볼 ${strikeCount}스트라이크`;
      }
      if(ballCount !== 0 && strikeCount === 0){
        return `${ballCount}볼`;
      }
      return `${strikeCount}스트라이크`;
  };

  const playGame = () => {
      //유저가 입력한 값 받아오기
      this.gameInfoObject.userInputNumbers = getUserNumbers($('#user-input').value);
      if(this.gameInfoObject.userInputNumbers !== ""){
        let compareResult = this.play(this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers);
        console.log(compareResult,this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers);
      }
      return;
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