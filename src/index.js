export default class BaseballGame {
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

  // 유저가 적은 수를 가져오는 함수 (예외사항 판별 기능 추가 예정)
  getUserNumber() {
    const userInput = document.querySelector('#user-input');
    const userInputNumber = userInput.value;

    return userInputNumber;
  }

  isUserInputRight() {}

  // 확인 버튼 눌렀을 때 유저 input값 불러온 후 값 비교하는 기능.
  compareNumber(computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
  }

  // 실행 기능
  play(computerInputNumbers, userInputNumbers) {
    this.compareNumber(computerInputNumbers, userInputNumbers);

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
