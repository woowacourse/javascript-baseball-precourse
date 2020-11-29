export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    const returnString = compareNumbers(computerInputNumbers, userInputNumbers);
    return returnString;
  }

  const genRandomNum = () => {
    let originalNums = [];
    let num = "";

    for (let i=1; i<10; i++) {
      originalNums.push(i);
    }
    
    for (let i=0; i<3; i++) {
      let randomIdx = Math.floor(Math.random()*(9-i));
      num += originalNums[randomIdx];  
      originalNums.splice(randomIdx, 1);
    }
    
    return num;   
  } 

  let computerInput = genRandomNum();
  const submitBtn = document.getElementById('submit');
  const resultArea = document.getElementById('result');

  submitBtn.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const isUserInputValid = validateInput(userInput);
    if (isUserInputValid) {
      const returnString = play(computerInput, userInput);
      resultArea.innerHTML = returnString;
    } else {
      clearInput();
    }
  });

  const clearInput = () => {
    document.getElementById('user-input').value = "";
  }

  const clearResult = () => {
    resultArea.innerHTML = "";
  }

  const validateInput = (userInputNumbers) => {
    if (isNaN(parseInt(userInputNumbers))) {
      alert("숫자를 입력해주세요.");
      return false;
    } else if (userInputNumbers.length !== 3) {
      alert("숫자를 3자리로 입력해주세요.");
      return false;
    } else if (userInputNumbers.includes("0")) {
      alert("0을 포함하지 않는 숫자를 입력해주세요.")
      return false;
    } else if (findDuplicateNumbers(userInputNumbers)) {
      alert("숫자를 중복 없이 입력해주세요.");
      return false;
    } else return true;
  }

  const findDuplicateNumbers = (numbers) => {
    return numbers.split("").some((e, i) => {
      return numbers.lastIndexOf(e) !== i;
    });
  }

  const compareNumbers = (computerInputNumbers, userInputNumbers) => {
    let ball = 0;
    let strike = 0; 

    if (computerInputNumbers === userInputNumbers) {
      showRestartButton();
      return '🎉<b>정답을 맞추셨습니다!</b>🎉';
    } else {
      for (let i=0; i<3; i++) {
        if (userInputNumbers[i] === computerInputNumbers[i]) {
          ball++;
        } else if (computerInputNumbers.includes(userInputNumbers[i])) {
          strike++;
        }
      }
      if (ball === 0 && strike === 0) {
        return '낫싱';
      }
    }

    if (ball > 0 && strike === 0) {
      return `${ball}볼`;
    } else if (strike > 0 && ball === 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }

  const showRestartButton = () => {
    const screen = document.getElementById('app');
    const restartText = document.createTextNode("게임을 새로 시작하시겠습니까?");
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id', 'game-restart-button');
    restartBtn.appendChild(document.createTextNode("게임 재시작"));
    screen.appendChild(restartText); 
    screen.appendChild(restartBtn); 

    restartBtn.addEventListener('click', () => {
      clearInput();
      clearResult();
      restartText.remove();
      restartBtn.remove();

      computerInput = genRandomNum();
    });
  }
}

new BaseballGame();
