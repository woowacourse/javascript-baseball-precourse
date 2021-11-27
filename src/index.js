import { $ } from "./utils/dom.js"

export default function BaseballGame() {
  const createAnswer = () => {
    const answerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return answerNumber;
  };

  let computerNumber = createAnswer();
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    printResult(computerInputNumbers, userInputNumbers);
  };


  const printError = (userInput) => {
    if(userInput.has(NaN)) {
      alert("잘못 입력하였습니다❗️ 숫자를 입력하세요.");
    }
    else if((userInput.size !== 3) && ($("#user-input").value.length ===3)) {
      alert("잘못 입력하였습니다❗️ 중복되지 않는 숫자를 입력하세요.");
    }
    else if(userInput.has(0)) {
      alert("잘못 입력하였습니다❗️ 0을 제외한 1~9까지의 수만 입력하세요.");
    }
    else if(userInput.size !== 3) {
      alert("잘못 입력하였습니다❗️ 3개의 숫자를 입력하세요.");
    }
    $("#user-input").value = '';
  }

  const printResult = (computerInputNumbers, userInputNumbers) => {
    const [strike, ball] = countAnswer(computerInputNumbers, userInputNumbers);

    if(strike && ball) {
      $("#result").innerText = `${ball}볼 ${strike}스트라이크`;
      return;
    }
    if(!strike && ball) {
      $("#result").innerText = `${ball}볼`;
      return;
    }
    if(strike === 3) {
      $("#result").innerHTML = 
      `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>
      <p id="restart">
        <span id="restart-message">게임을 새로 시작하시겠습니까?</span>
        <button id="game-restart-button">게임 재시작</button>
      </p>` 
      return;
    }

    if(!ball && strike) {
      $("#result").innerText = `${strike}스트라이크`;
      return; 
    }

    if(!strike && !ball) {
      $("#result").innerText = "낫싱";
      return;
    }
  }

  const countAnswer = (computerInputNumbers, userInputNumbers) => {
    const [comNum1, comNum2, comNum3] = computerInputNumbers;
    const [userNum1, userNum2, userNum3] = [...userInputNumbers];

    // 스트라이크 수 
    let strike = 0;
    [comNum1, comNum2, comNum3].forEach((num, i) => {
      if(num === [userNum1, userNum2, userNum3][i]) strike += 1;
    });

    // 볼 수 
    let ball = 0;
    [comNum1, comNum2, comNum3].forEach((num, i) => {
      if(([userNum1, userNum2, userNum3].indexOf(num) !== i) && ([userNum1, userNum2, userNum3].indexOf(num) !== -1)) ball += 1;
    });

    return [strike, ball];
  }

  const isVaildNum = () => {
    //유효하지 않은 경우 (에러메시지)
    const userInput = new Set([...$("#user-input").value.split('').map(num => Number(num))]);
    
    if(userInput.has(0) || userInput.size !== 3 || userInput.has(NaN)) {
      printError(userInput);
      return;
    }

    //유효한 경우 (결과 출력)
    this.play(computerNumber, userInput);
  };

  const restartGame = () => {
    computerNumber = createAnswer();
    $("#result").innerHTML = '';
    $("#user-input").value = '';
  };

  $("#input-form").addEventListener("submit", e => {
    e.preventDefault();
  })
  
  $("#submit").addEventListener("click", isVaildNum);

  $("#result").addEventListener("click", e => {
    if (e.target.id === "game-restart-button") {
      restartGame();
    }
  });
} 

new BaseballGame();