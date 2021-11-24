import MissionUtils from "@woowacourse/mission-utils";
export default function BaseballGame() {
  const btnSubmit=document.querySelector('#submit');
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");
  let computerInputNumbers=[];

  const generateComNumber=()=>{
    computerInputNumbers= MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return computerInputNumbers
  }


  //this.play = function (computerInputNumbers, userInputNumbers) {
    //return "결과 값 String";
    //};
  




  computerInputNumbers=generateComNumber();
  console.log(computerInputNumbers)
}

BaseballGame();