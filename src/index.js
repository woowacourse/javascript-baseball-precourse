let comNum = getRandNum();
const BG = new BaseballGame();

console.log(BG.test("123", "213"));
console.log(BG.test("123", "341"));
console.log(BG.test("123", "555"));
console.log(BG.test("123", "123"));



// functions
export default function BaseballGame() {
  this.isValidInput = (userInput) => {
    // 1~9가 아닌 문자와 일치할 경우
    if(/[^1-9]/.test(userInput)) return false;

    // 3자리 인지 확인
    if(userInput.length !== 3) return false;

    // 중복 확인
    if(userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[2] === userInput[0])
      return false;
    
    return true;
  };
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";
  };

  this.test = (a, b) => {
    return countBalls(a, b);
  };

  function countBalls(comInput, userInput) {
    let count = 0;

    for(let i=0; i<3; ++i) {
      for(let j=1; j<3; ++j) {
        count += (comInput[i] === userInput[(i+j)%3]);
      }
    }

    return count;
  }
}

function getRandNum() {
  let ret = '';
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 중복을 피하기 위해 nums에서 랜덤으로 하나씩 splice하여 가져온다.
  
  for(let i=0; i<3; ++i) {
    const tmpN = nums.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    ret += tmpN.toString();
  }

  return ret;
};