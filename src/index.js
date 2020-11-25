export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return `${computerInputNumbers} ${userInputNumbers}`;
  }

  // 컴퓨터 입력 값 가져오기 메소드
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

  // 중복 검사 함수
  isDuplicate(text1, text2) {
    let resultData = false;

    // 중복이 없으면 -1을 출력함
    if (text1.indexOf(text2) === -1) {
      resultData = true;
    }

    return resultData;
  }
}

// 테스트 케이스
const game = new BaseballGame();
// 컴퓨터 입력 값 테스트
const testCase1 = game.getComputerNumber();
// 유저 입력 값 테스트
const testCase2 = 456;

// 콘솔 창에 테스트
console.log(game.play(testCase1, testCase2));
