export default class BaseballGame {
  constructor() {
    this.DIGITS = 3;
    this.isEnded = false; //종료 플래그
    this.computerInputNumbers = ""; // 컴퓨터 입력값

    this.init();
  }

  //* 초기 설정 메서드
  init = () => {
    this.isEnded = false;
    this.computerInputNumbers = this.generateRandomNumbers();
    console.log(this.computerInputNumbers);
  };

  //* 랜덤 값 생성 메서드
  generateRandomNumbers() {
    let randomNumbers = "";
    while (randomNumbers.length != this.DIGITS) {
      const number = String(Math.floor(Math.random() * 9) + 1);
      if (!randomNumbers.includes(number)) randomNumbers += number;
    }
    return randomNumbers;
  }

  //* 입력값 비교 메서드
  compareNumbers(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;
    for (let i = 0; i < this.DIGITS; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) strikeCount++;
      else if (computerInputNumbers.includes(userInputNumbers[i])) ballCount++;
    }
    return { strikeCount, ballCount };
  }

  //* 결과 반환 메서드
  play(computerInputNumbers, userInputNumbers) {
    let result = "";
    const { strikeCount, ballCount } = this.compareNumbers(
      computerInputNumbers,
      userInputNumbers
    );
    if (strikeCount === this.DIGITS) {
      this.isEnded = true;
      result = "🎉 정답을 맞추셨습니다. 🎉";
      return result;
    }
    if (ballCount) result += `${ballCount}볼`;
    if (strikeCount) result += ` ${strikeCount}스트라이크`;
    if (!ballCount && !strikeCount) result = "낫싱";
    return result;
  }
}
