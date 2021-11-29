export function countIntersect(computerInputNumbers, userInputNumbers) {
  const computer = computerInputNumbers;
  const user = userInputNumbers;
  const intersect = computer.filter((value) => user.includes(value));

  return intersect.length;
}

export function countStrike(computerInputNumbers, userInputNumbers) {
  let strike = 0;

  for (let i = 0; i < 3; i += 1) {
    if (computerInputNumbers[i] === userInputNumbers[i]) strike += 1;
  }

  return strike;
}

export function countBall(intersect, strike) {
  return intersect - strike;
}
