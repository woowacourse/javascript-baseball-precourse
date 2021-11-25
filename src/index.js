import {$} from './dom/dom.js';
import getComputerNumbers from "./modules/getComputerNumbers.js";
import getUserNumbers from './modules/getUserNumbers.js';

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
      console.log(computerInputNumbers, userInputNumbers);
      return "결과 값 String";
  };

  const playGame = () => {
      //유저가 입력한 값 받아오기
      this.gameInfoObject.userInputNumbers = getUserNumbers($('#user-input').value);
      this.play(this.gameInfoObject.computerInputNumbers, this.gameInfoObject.userInputNumbers);
  }
  
  const initEventListener = () => {
    $('#app form').addEventListener("submit",(e) =>{
      e.prevetDefault();
    })
    //user가 submit버튼 클릭시 playGame 함수 실행 
    $('#submit').addEventListener("click", playGame);
  }
}

const baseballGamePlay = new BaseballGame();
baseballGamePlay.init();