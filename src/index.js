import { $ } from "./utils/dom.js"

export default function BaseballGame() {
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";  
  };

  const createAnswer = () => {
    const answerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return answerNumber;
  };

  const printError = () => {
    console.log("숫자 잘못 입력");
  }

  const printResult = () => {
    console.log("숫자 제대로 입력");
  }

  const isVaildNum = () => {
    //유효하지 않은 경우 (에러메시지)
    const userInput = new Set([...$("#user-input").value.split('').map(num => Number(num))]);
    if(userInput.has(0) || userInput.size !== 3) {
      printError();
      return;
    }

    //유효한 경우 (결과 출력)
    printResult();
  }
  $("#input-form").addEventListener("submit", e => {
    e.preventDefault();
  })
  $("#submit").addEventListener("click", isVaildNum);
  $("#user-input").addEventListener("keypress", e => {
    if (e.key !== 'Enter') {
      return;
    }
    isVaildNum();
  });
} 

new BaseballGame();