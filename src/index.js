export default function BaseballGame() {
  this.isValidInput = (userInput) => {
    let ret = true;

    // 1~9가 아닌 문자와 일치할 경우
    if(/[^1-9]/.test(userInput)) {
      ret = false;
    }

    // 3자리 인지 확인
    if(userInput.length !== 3) {
      ret = false;
    }

    // 중복 확인
    if(userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[2] === userInput[0]) {
      ret = false;
    }
    
    return ret;
  };
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    const ballsNum = countBalls(computerInputNumbers, userInputNumbers);
    const strikesNum = countStrikes(computerInputNumbers, userInputNumbers);
    let ret = '';

    if(ballsNum === 0 && strikesNum === 0) {
      ret = '낫싱';
    } else if(strikesNum === 3) {
      ret = '정답';
    } else {
      const ballResult = ballsNum ? `${ballsNum}볼` : '';
      const strikeResult = strikesNum ? `${strikesNum}스트라이크` : '';

      ret = `${ballResult} ${strikeResult}`;
      ret = ret.replace(/^\s/, '');
    }

    return ret;
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

  function countStrikes(comInput, userInput) {
    let count = 0;

    for(let i=0; i<3; ++i) {
      count += (comInput[i] === userInput[i]);
    }

    return count;
  }
}

const getRandNum = () => {
  let ret = '';
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 중복을 피하기 위해 nums에서 랜덤으로 하나씩 splice하여 가져온다.
  
  for(let i=0; i<3; ++i) {
    const tmpN = nums.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    ret += tmpN.toString();
  }

  return ret;
};

const BG = new BaseballGame();
// let comNum = getRandNum();

console.log(BG.play('123', '456'));
console.log(BG.play('123', '156'));
console.log(BG.play('123', '416'));
console.log(BG.play('123', '152'));
console.log(BG.play('123', '123'));