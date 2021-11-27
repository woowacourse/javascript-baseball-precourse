export function countStrike(computerInputNumbers, userInputNumbers) {
  var numOfStrike = 0;
  const computerInputNumberArr = String(computerInputNumbers).split("");
  const userInputNumberArr = String(userInputNumbers).split("");

  computerInputNumberArr.map((item, index) => {
    if (item === userInputNumberArr[index]) numOfStrike += 1;
  });

  return numOfStrike;
}

export function countBall(computerInputNumbers, userInputNumbers) {
  var numOfBall = 0;
  const computerInputNumberArr = String(computerInputNumbers).split("");
  const userInputNumberArr = String(userInputNumbers).split("");

  computerInputNumberArr.map((item, index) => {
    if (index === 0) {
      if (item === userInputNumberArr[1] || item === userInputNumberArr[2])
        numOfBall += 1;
    } else if (index === 1) {
      if (item === userInputNumberArr[0] || item === userInputNumberArr[2])
        numOfBall += 1;
    } else {
      if (item === userInputNumberArr[0] || item === userInputNumberArr[1])
        numOfBall += 1;
    }
  });

  return numOfBall;
}

export function win() {
  console.log("승리");
}
