// export default function BaseballGame() {
//   this.play = function (computerInputNumbers, userInputNumbers) {
//     return '결과 값 String';
//   };
// }

const input = document.getElementById('user-input');
submit.onclick = () => {
  const inputArrays = input.value.split('');
  // 중복된 값 체크
  if (
    inputArrays[0] === inputArrays[1] ||
    inputArrays[1] === inputArrays[2] ||
    inputArrays[0] === inputArrays[2] ||
    inputArrays.length !== 3
  ) {
    alert('숫자가 유효하지 않습니다. 다시 입력해주세요!'); // 중복 발생시 alert
    input.value = '';
    input.focus();
  } else {
    // 게임 시작
    const inputNumberArrays = inputArrays.map((i) => parseInt(i)); // 입력값을 문자열에서 숫자로
    result.innerHTML = new BaseballGame().play(
      // 결과값을 얻기 위해 게임 진행
      randomNumbers,
      inputNumberArrays,
    );
  }
};

// 재시작 버튼, 리스너
const restart = document.getElementById('game-restart-button');
restart.onclick = () => {
  input.value = '';
  result.innerHTML = '';
  end.style.display = 'none';
  randomNumbers = getRandomNum();
};

// 컴퓨터가 정해주는 랜덤 수 구하기
let randomNumbers = getRandomNum();

function getRandomNum() {
  const arr = [];
  while (arr.length < 3) {
    const randomNumber = parseInt(Math.random() * 9) + 1;
    const isDuplicated = arr.includes(randomNumber);
    if (!isDuplicated) arr.push(randomNumber);
  }

  return arr;
}

export default class BaseballGame {
  constructor() {
    this.strike = 0;
    this.ball = 0;
  }
  play(computerInputNumbers, userInputNumbers) {
    for (let i = 0; i < 3; i++)
      this.getStrikesAndBalls(computerInputNumbers, userInputNumbers, i);

    return this.getResult();
  }
  getStrikesAndBalls(computerInputNumbers, userInputNumbers, idx) {
    for (let i = 0, len = computerInputNumbers.length; i < len; i++)
      if (computerInputNumbers[i] === userInputNumbers[idx])
        i === idx ? this.strike++ : this.ball++;
  }
  getResult() {
    end.style.display = 'none';
    if (this.strike === 3) {
      end.style.display = 'block';
      return '🎉<strong>정답을 맞추셨습니다!</strong>🎉';
    } else if (this.strike === 0 && this.ball === 0) return '낫씽';
    else if (this.strike === 0) return `${this.ball}볼`;
    else if (this.ball === 0) return `${this.strike}스트라이크`;
    else return `${this.ball}볼 ${this.strike}스트라이크`;
  }
}

// new BaseballGame(); 버튼 클릭시 게임이 진행되어야 하므로 자동으로 게임 진행되는 부분은 주석처리
