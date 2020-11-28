export default function BaseballGame() {
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', () => {
    const userInputNumbers = document.getElementById('user-input').value;
    const isUserInputValid = validateInput(userInputNumbers);
    console.log(isUserInputValid);
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

  const clearInput = () => {
    document.getElementById('user-input').value = "";
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
}

new BaseballGame();
