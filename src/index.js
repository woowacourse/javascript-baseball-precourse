import {BASEBALL} from "./constants.js"

export default function BaseballGame() {
  const submitBtn = document.getElementById("submit");
  const userInput = document.getElementById('user-input');
  const resultDiv = document.getElementById('result');
  const restartDiv = document.getElementById('restart');
  const restartBtn = document.getElementById('game-restart-button');

  const getComputerNum = () => {
    let numList = new Array();
    let comNum = ''

    while (numList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numList.includes(num)) {
        numList.push(num);
        comNum += String(num);
      }
    }

    return comNum;
  };

  let computerInputNumbers = getComputerNum();

  //check 1- 숫자인지 확인
  const checktype = num => {
    if (isNaN(Number(num))) {
      alert(BASEBALL.ALERT_ONLY_NUM);
      return true;
    }
    return false;
  }

  //check 2- 3자리인지 확인
  const checkLen = num => {
    if (num.length != 3) {
      alert(BASEBALL.ALERT_THREE_NUM)
      return true;
    }
    return false;
  }

  //check3 - 숫자 범위 확인 (0 포함 확인)
  const checkOnetoNine = num => {
    if (num.includes(0)) {
      alert(BASEBALL.ALERT_ONE_TO_NINE);
      return true;
    }
    return false;
  }

  //check4 - 숫자 중복 여부 확인
  const checkDuplication = num => {
    if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]){
      alert(BASEBALL.ALERT_DUPLICATION);
      return true;
    }
    return false;
  }

  // check All
  const checkNum = num => {
    if (checktype(num) || checkLen(num) || checkOnetoNine(num) || checkDuplication(num)){
      return false;
    }
    return true;
  }

  // 사용자 수 입력받기
  const getUserNum = () => {
    const userInputNumbers = userInput.value;

    if (checkNum(userInputNumbers)){
      return userInputNumbers;
    }
    userInput.autofocus;
  }

   // get Ball
   const getBallCount = (computerNum, userNum) => {
    let ball = 0;
    for (let i = 0; i < 3; i++){
      if (computerNum[i] != userNum[i] && computerNum.includes(userNum[i])) {
        ball += 1;
      }
    }
    return ball;
  }

  //get Strike
  const getStrikeCount = (computerNum, userNum) => {
    let strike = 0;
    for (let i = 0; i < 3; i++){
      if (computerNum[i] == userNum[i]) {
        strike += 1;
      }
    }
    return strike;
  }
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    let result = '';
    const ballCount = getBallCount(computerInputNumbers, userInputNumbers);
    const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);

    if (strikeCount === 3) return BASEBALL.ANSWER;
    if (strikeCount === 0 && ballCount == 0) return BASEBALL.NOTHING;
    if (ballCount != 0) result += `${ballCount}${BASEBALL.BALL} `;
    if (strikeCount != 0) result += `${strikeCount}${BASEBALL.STRIKE}`;

    return result;
  };

  const startGame = () => {
    let userNum = getUserNum();
    let result = '';
    
    if (userNum != undefined) {
      console.log(computerInputNumbers);
      result = this.play(computerInputNumbers, userNum);
    }
    showResult(result)
    return result;
  };

  const showResult = result => {
    resultDiv.innerHTML = result;

    if (result == BASEBALL.ANSWER) {
      restartDiv.style.visibility = "visible";
    }
  }

  const restartGame = () => {
    restartDiv.style.visibility = "hidden";
    userInput.value = '';
    resultDiv.innerText = '';

    computerInputNumbers = getComputerNum();
  }

  submitBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", restartGame);
}

new BaseballGame();