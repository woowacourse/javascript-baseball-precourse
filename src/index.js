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
}

new BaseballGame();
