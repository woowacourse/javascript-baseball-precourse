import { $ } from "./utils/dom.js"

export default function BaseballGame() {
  const createAnswer = () => {
    const answerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return answerNumber;
  };

  let computerNumber = createAnswer();
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";  
  };


  const printError = () => {
    alert("입력값이 잘못되었습니다. 1~9까지의 수를 중복없이 3개 작성해주세요.");
    $("#user-input").value = '';
  }

  const printResult = () => {
    console.log(computerNumber);
    const [strike, ball] = countAnswer();

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

  const countAnswer = () => {
    const [comNum1, comNum2, comNum3] = computerNumber;
    const [userNum1, userNum2, userNum3] = [...new Set($("#user-input").value.split('').map(num => Number(num)))];

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
    if(userInput.has(0) || userInput.size !== 3) {
      printError();
      return;
    }

    //유효한 경우 (결과 출력)
    printResult();
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