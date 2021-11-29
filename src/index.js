import { $ } from "./utils/dom.js"
import { createAnswer } from "./createAnswer.js"

export default function BaseballGame() {
  let computerInputNumbers = createAnswer(); 
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    if(!Array.isArray(computerInputNumbers) && !Array.isArray(userInputNumbers)) {
      computerInputNumbers = getNumArr(computerInputNumbers);
      userInputNumbers = getNumArr(userInputNumbers);
    }

    return getResult(computerInputNumbers, userInputNumbers);
  };
  
  const getNumArr = (notNumArr) => {
    return notNumArr.toString().split('').map(num => Number(num));
  }
  
  const resetOutput = () => {
    $("#result").innerHTML = '';
    $("#user-input").value = '';
  }

  const isVaildNum = () => {
    const userInputNumbers = getNumArr($("#user-input").value);
    if(userInputNumbers.includes(0) || userInputNumbers.includes(NaN) || userInputNumbers.length !== 3 ||  [...new Set(userInputNumbers)].length !== 3) {
      printError(userInputNumbers);
      return;
    }

    printResult(this.play(computerInputNumbers, userInputNumbers));
  };

  const printError = (userInputNumbers) => {
    if(userInputNumbers.includes(NaN)) {
      alert("잘못 입력하였습니다❗️ 숫자를 입력하세요.");
    } else if(([...new Set(userInputNumbers)].length !== 3) && ($("#user-input").value.length === 3)) {
      alert("잘못 입력하였습니다❗️ 중복되지 않는 숫자를 입력하세요.");
    } else if(userInputNumbers.includes(0)) {
      alert("잘못 입력하였습니다❗️ 0을 제외한 1~9까지의 수만 입력하세요.");
    } else if(userInputNumbers.length !== 3) {
      alert("잘못 입력하였습니다❗️ 3개의 숫자를 입력하세요.");
    }
    resetOutput();
  }

  const countAnswer = (computerInputNumbers, userInputNumbers) => {
    const strike = computerInputNumbers.reduce((acc, num, i) => {
      if(num === userInputNumbers[i]) {
        acc += 1;
      }
      return acc;
    }, 0);

    const ball = computerInputNumbers.reduce((acc, num, i) => {
      if((userInputNumbers.indexOf(num) !== i) && (userInputNumbers.indexOf(num) !== -1)) {
        acc += 1;
      }
      return acc;
    }, 0);

    return [strike, ball];
  }

  const getResult = (computerInputNumbers, userInputNumbers) => {
    const [strike, ball] = countAnswer(computerInputNumbers, userInputNumbers);
    if(strike === 3) {
      return "정답";
    }
    if(!strike && !ball) {
      return "낫싱";
    }
    return `${ball? ball + '볼 ' : ''}${strike? strike + '스트라이크' : ''}`;
  }

  const printResult = (result) => {
    if(result === '정답') {
      $("#result").innerHTML = 
      `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>
      <p id="restart">
        <span id="restart-message">게임을 새로 시작하시겠습니까?</span>
        <button id="game-restart-button">게임 재시작</button>
      </p>` 
      return;
    }
    $("#result").innerText = result;
  };



  const restartGame = () => {
    computerInputNumbers = createAnswer();
    resetOutput();
  };

  $("#input-form").addEventListener("submit", e => {
    e.preventDefault();
    isVaildNum();
  })

  $("#result").addEventListener("click", e => {
    if (e.target.id === "game-restart-button") {
      restartGame();
    }
  });
} 

new BaseballGame();