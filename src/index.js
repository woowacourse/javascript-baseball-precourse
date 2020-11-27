export default class BaseballGame {
  // 랜덤 3자리 수 생성 메서드
  generateRandomNumber() {
    let computerInputNumbers = [];

    while (computerInputNumbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 8 + 1);

      if (!computerInputNumbers.includes(randomNumber)) {
        computerInputNumbers.push(randomNumber);
      }
    }

    return computerInputNumbers;
  }

  // 주어진 숫자가 유효한지 확인 메서드
  checkVaild(userInputNumbers) {
    // 숫자인지 검사
    if (isNaN(userInputNumbers.join(""))) {
      alert("입력한 값이 숫자가 아닙니다");

      return false;
    }

    // 0이 포함되어있는지 검사
    if (userInputNumbers.includes("0")) {
      alert("입력한 숫자에 0이 포함됩니다");

      return false;
    }

    // 주어진 숫자의 길이가 3인지 검사
    if (userInputNumbers.length !== 3) {
      alert("입력한 값이 3자리가 아닙니다");

      return false;
    }

    // 주어진 숫자내 중복되는 값이 있는지 검사
    const dupNumbers = userInputNumbers.filter(
      (num, index) => userInputNumbers.indexOf(num) !== index
    );

    if (dupNumbers.length > 0) {
      alert("입력한 값에 중복된 값이 있습니다");

      return false;
    }

    return true;
  }
}

new BaseballGame();
