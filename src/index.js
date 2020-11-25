// * 1부터 9사이의 임의의 수 생성
const generateRandomNum = () => {
  let ranNum = Math.floor(Math.random() * 10);

  while (ranNum === 0) {
    ranNum = Math.floor(Math.random() * 10);
  }

  return ranNum;
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
