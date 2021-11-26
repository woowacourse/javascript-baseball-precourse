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
    alert("입력값이 잘못되었습니다. 1~9까지의 수를 중복없이 3개 작성해주세요.");
    $("#user-input").value = '';
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
} 

new BaseballGame();