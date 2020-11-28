export default function BaseballGame() {
  const play = (computerInputNumbers, userInputNumbers) => {
    compareNumbers(computerInputNumbers, userInputNumbers);
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

  const clearInput = () => {
    document.getElementById('user-input').value = "";
  }

  const computerInput = genRandomNum();
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const isUserInputValid = validateInput(userInput);
    if (isUserInputValid) {
      play(computerInput, userInput);
    }
  });

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
      console.log("정답입니다!");
    } else if (computerInputNumbers.includes(userInputNumbers[0])) {
      for (let i=0; i<3; i++) {
        if (userInputNumbers[i] === computerInputNumbers[i]) {
          ball++;
        } else if (computerInputNumbers.includes(userInputNumbers[i])) {
          strike++;
        }
      }
    } else {
      console.log("낫싱");
    }
  }
}

new BaseballGame();
