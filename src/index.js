export function createRandomNums() {
  let randomNumbers = "";
  let i = 0;

  while (i < 3) {
    //이미 포함된 숫자가 아닌 다른 수가 나올때 까지 난수를 생성
    const num = String(Math.floor(Math.random() * 10));
    if (!randomNumbers.includes(num)) {
      randomNumbers += num;
      i += 1;
    }
  }

  return randomNumbers;
}

export default function BaseballGame() {
  this.computerNumbers = createRandomNums();
  // console.log(this.computerNumbers);
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
