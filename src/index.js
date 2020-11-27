export default class BaseballGame {
  getComputerNumber() {
    let computerInputNumbers = '';

    while (computerInputNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);

      if (this.isDuplicate(computerInputNumbers, randomNumber)) {
        computerInputNumbers += randomNumber.toString();
      }
    }

    return computerInputNumbers;
  }

  isDuplicate(text1, text2) {
    let resultData = false;

    // 중복이 없으면 -1을 출력함
    if (text1.indexOf(text2) === -1) {
      resultData = true;
    }

    return resultData;
  }

  getUserNumber() {
    const userInput = document.querySelector('#user-input');
    const userInputNumber = this.isUserNumberRight(userInput, userInput.value);

    return userInputNumber;
  }

  isUserNumberRight(userInput, text) {
    let returnValue = null;

    if (
      text.length === 3 &&
      isNaN(text) === false &&
      this.isDuplicate(text[0], text[1]) === true &&
      this.isDuplicate(text.slice(0, 2), text[2]) === true
    ) {
      userInput.value = '';
      returnValue = text;
    } else {
      userInput.value = '';
      alert('다시 입력해주세요');
    }

    return returnValue;
  }

  compareNumber(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (var i = 0; i < 3; i++) {
      if (computerInputNumbers.indexOf(userInputNumbers[i]) === i) {
        strike++;
      } else if (computerInputNumbers.indexOf(userInputNumbers[i]) > -1) {
        ball++;
      }
    }

    return [strike, ball];
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      console.log('낫싱');
    } else if (strike === 3) {
      console.log('정답입니다.');
    } else if (strike > 0 && ball === 0) {
      console.log(`${strike} 스트라이크`);
    } else if (strike === 0 && ball > 0) {
      console.log(`${ball} 볼`);
    } else {
      console.log(`${strike} 스트라이크 ${ball} 볼`);
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    if (userInputNumbers === null) {
      console.log('다시 입력');
    } else {
      const [strike, ball] = this.compareNumber(
        computerInputNumbers,
        userInputNumbers
      );

      this.printResult(strike, ball);
    }

    return `${computerInputNumbers} ${userInputNumbers}`;
  }
}

// 테스트 케이스
const game = new BaseballGame();
const btn = document.querySelector('#submit');
const userInput = document.querySelector('#user-input');
const testCase1 = game.getComputerNumber();

// 확인 버튼 클릭
btn.addEventListener('click', () => {
  const testCase2 = game.getUserNumber();

  game.play(testCase1, testCase2);
});

// Enter
userInput.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    const testCase2 = game.getUserNumber();

    game.play(testCase1, testCase2);
  }
});
