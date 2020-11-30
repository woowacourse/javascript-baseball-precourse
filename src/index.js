export default function BaseballGame() {
  let userInputNumbers = ""
  let computerInputArray = getComputerInputNumbers()
  const input = document.querySelector("#user-input")
  let newH1 = document.createElement("h1")
  let divResult = document.getElementById("result")
  newH1.setAttribute("id", "resultH1")
  divResult.appendChild(newH1)
  
  let gameRestart = document.createElement("button")
  gameRestart.innerHTML = "게임 재시작"
  gameRestart.addEventListener('click', () => init())


  // TODO 3: 두 숫자를 비교한다.
  const play = function (computerInputNumbers, userInputNumbers) {
    // TODO 3-1: 스트라이크 개수 카운트
    const countStrikes = (computerInputArray, userInputString) => {
      let strikes = 0;
      computerInputArray.map((digit, index) => {
        if (digit === parseInt(userInputString[index])) {
          strikes +=1;
        }
      });
      return strikes;
    }

    // TODO 3-2: 볼 개수 카운트
    const countBalls = (computerInput, userInputString) => {
      let balls = 0;
      const flags = Array(10).fill(false);

      userInputString.split("").map(digit => {
        flags[parseInt(digit)] = true;
      });

      computerInputArray.map((digit, index) => {
        if (parseInt(userInputString[index]) !== digit && flags[parseInt(digit)]) {
          balls += 1;
        }
      });
      return balls;
    }

    if (countStrikes(computerInputNumbers, userInputNumbers) === 3) {
      divResult.appendChild(gameRestart)
      return "🎉정답을 맞추셨습니다!🎉"
    } else {
      return `${countBalls(computerInputNumbers, userInputNumbers)} 볼 ${countStrikes(computerInputNumbers, userInputNumbers)} 스트라이크`;
    }
  };

  // TODO 1: 컴퓨터가 임의의 서로 다른 3개의 숫자로 세자리 수를 만드는 기능
  function getComputerInputNumbers() {
    let numberCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numberArray = new Array();
    for (let i = 0; i < 3; i += 1) {
      let selectedNumber = numberCandidate.splice(Math.floor(Math.random()*(9-i)), 1);
      numberArray.push(selectedNumber[0])
    }
    return numberArray
  }

  // TODO 2: 사용자로부터 입력받은 값의 유효성 판단해서 게임 진행 여부를 결정하는 기능
  function getUserInputNumbers() {
    userInputNumbers = input.value
    if (!isValid(userInputNumbers)) {
      alert("유효한 숫자(1~9까지 서로 다른 수를 갖는 세자리 수)를 입력해 주세요")
      input.value = ""
      return
    }
    
    // TODO 4: play 메서드 실행 (결과가 정답이면 다시 play 실행)
    let resultString = play(computerInputArray, userInputNumbers)
    let resultH1 = document.querySelector("#resultH1")
    resultH1.innerHTML = resultString

  }

  // TODO 2-1: 입력길이 제한(세 자리까지)
  function setInputMaxLength() {
    const input = document.querySelector("#user-input");
    input.maxLength = 3;
  }

  // TODO 2-2: 사용자 입력 값 유효성 검증
  function isValid(userInput) {
    let number = Number(userInput)
    // 숫자가 아닌 경우
    if (isNaN(number)) {
      return false
    }
    // 범위 밖인 경우
    if (number < 123 || number > 999) {
      return false
    }
    // 세 개의 숫자 중에 중복된 숫자가 있는 입력 값인 경우
    let numberSet = new Set(userInput.split(""))
    if (numberSet.size !== 3) {
      return false
    }
    // 0이 입력 값에 포함된 경우
    if (userInput.indexOf("0") > -1) {
      return false
    }

    return true
  }

  
  function btnEvent() {
    const btn = document.querySelector("#submit")
    btn.addEventListener("click", ()=>getUserInputNumbers())
  }
  
  function init() {
    setInputMaxLength()
    computerInputArray = getComputerInputNumbers()
    let resultH1 = document.querySelector("#resultH1")
    resultH1.innerHTML = ''
    input.value = ""
    divResult.removeChild(gameRestart)
  }

  setInputMaxLength()
  btnEvent()
}

new BaseballGame();
