export default function BaseballGame() {

  const submitBtn = document.querySelector("#submit");
  const userInput = document.querySelector("#user-input");
  const result = document.querySelector("#result");

  const MAX_NUM = 9;
  const MIN_NUM = 1;
  const NUM_LENGTH = 3;

  let computerInputNumbers = [];
  let userInputNumbers = [];

  // 랜덤 값 생성
  const generateRandomNum = () => {
    let selectedNumbers = [];

    while (!(selectedNumbers.length === NUM_LENGTH)) {
      let randomNum = Math.floor(Math.random() * (MAX_NUM + 1 - MIN_NUM) + MIN_NUM);
      if (!selectedNumbers.includes(randomNum.toString())) {
        selectedNumbers.push(randomNum.toString());
      }
    }

    return selectedNumbers;
  }

  // 사용자 입력 값 유효성 확인
  const validateUserInput = () => {
    let isValid = true;
    userInputNumbers = userInput.value.split('');
    userInputNumbers = Array.from(new Set(userInputNumbers));

    // (예외 처리) 입력 값 길이가 3이 아닌 경우
    if (userInputNumbers.length !== NUM_LENGTH) {
      isValid = false;

      return isValid
    }
    userInputNumbers.forEach(val => {
      let valToInt = parseInt(val);
      // 숫자가 아닌 입력인 경우
      if (isNaN(valToInt)) {
        isValid = false;
      }
      // 숫자 범위를 벗어난 경우
      if (valToInt < MIN_NUM || valToInt > MAX_NUM) {
        isValid = false;
      }
    })

    return isValid;
  }

  // 힌트 생성
  const getHint = (strike, ball) => {
    let output = '';

    if (strike === 0 && ball === 0) {
      output = '낫싱'
    } else if (strike === NUM_LENGTH) {
      output = '정답'
    } else if (ball && strike) {
      output += `${ball}볼 ${strike}스트라이크`;
    } else {
      ball ? output += `${ball}볼` : output += `${strike}스트라이크`;
    }
    
    return output;
  }

  // 값 비교 및 힌트 String 리턴
  const play = (computerInputNumbers, userInputNumbers) => {
    let strike = 0;
    let ball = 0;
    let output = '';

    computerInputNumbers.forEach((item, idx) => {
      if (userInputNumbers.indexOf(item) === idx) {
        strike++;
      } else if (userInputNumbers.indexOf(item) !== -1) {
        ball++;
      }
    })

    output = getHint(strike, ball);

    return output;
  };

  // 결과 출력
  const getResult = hint => {
    if (hint === '정답') {
      result.innerHTML = '🎉 <strong>정답을 맞추셨습니다!</strong> 🎉<br><br>게임을 새로 시작하겠습니까? <button id="game-restart-button">게임 재시작</button>';
      const restartBtn = document.querySelector("#game-restart-button");
      restartBtn.addEventListener("click", init);
    } else {
      result.innerHTML = hint;
    }
  }

  // 입력 값 및 결과 값 삭제
  const clearValue = () => {
    result.innerHTML = '';
    userInput.value = '';
  }

  // 시작
  const init = () => {
    clearValue();
    computerInputNumbers = generateRandomNum();
    console.log(`Let's guess! ${computerInputNumbers}`);
  }

  submitBtn.addEventListener("click", () => {
    const isValid = validateUserInput();

    if (isValid) {
      const hint = play(computerInputNumbers, userInputNumbers);
      getResult(hint);
    } else {
      alert('잘못된 입력입니다! 다시 입력해주세요.');
      clearValue();
    }

  });

  init();
}

new BaseballGame();
