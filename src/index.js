// * 1부터 9사이의 임의의 수 생성
const generateRandomNum = () => {
  let ranNum = Math.floor(Math.random() * 10);

  while (ranNum === 0) {
    ranNum = Math.floor(Math.random() * 10);
  }

  return ranNum;
};

// * 서로 다른 수 3개를 뽑아 3자리 수 만들기.
const generateThreeDigit = () => {
  let numArr = [];

  while (numArr.length < 3) {
    let pickedNum = generateRandomNum();
    if (numArr.includes(pickedNum)) {
      continue;
    } else {
      numArr.push(pickedNum);
    }
  }

  const parsedNum = parseInt(numArr.join(""), 10);

  return parsedNum;
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
