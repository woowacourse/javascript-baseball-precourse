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
    
    console.log(num);
    return num;   
  } 

  const computerInput = genRandomNum();
  const submitBtn = document.getElementById('submit');
  const resultArea = document.getElementById('result');

  submitBtn.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const isUserInputValid = validateInput(userInput);
    if (isUserInputValid) {
      const returnString = play(computerInput, userInput);
      resultArea.innerHTML = returnString;
    }
  });

  const clearInput = () => {
    document.getElementById('user-input').value = "";
  }

  const validateInput = (userInputNumbers) => {
    if (isNaN(parseInt(userInputNumbers))) {
      alert("숫자를 입력해주세요.");
      clearInput();
      return false;
    } else if (userInputNumbers.length !== 3) {
      alert("숫자를 3자리로 입력해주세요.");
      clearInput();
      return false;
    } else return true;
  }

  const compareNumbers = (computerInputNumbers, userInputNumbers) => {
    let ball = 0;
    let strike = 0; 

    if (computerInputNumbers === userInputNumbers) {
      return '정답입니다!';
    } else if (computerInputNumbers.includes(userInputNumbers[0])) {
      for (let i=0; i<3; i++) {
        if (userInputNumbers[i] === computerInputNumbers[i]) {
          ball++;
        } else if (computerInputNumbers.includes(userInputNumbers[i])) {
          strike++;
        }
      }
    } else {
      return '낫싱';
    }

    if (ball > 0 && strike === 0) {
      return `${ball}볼`;
    } else if (strike > 0 && ball === 0) {
      return `${strike}스트라이크`;
    } else if (ball > 0 && strike > 0) {
      return `${ball}볼 ${strike}스트라이크`;
    }
  }
}

new BaseballGame();
