export default function countStrikeAndBall(computerInputNumbers, userInputNumbers) {
  let strike = 0;
  let ball = 0;

  for (let index = 0; index < computerInputNumbers.length; index++) {
    if (computerInputNumbers[index] === userInputNumbers[index]) {
      strike++;
    } else if (computerInputNumbers.includes(userInputNumbers[index])) {
      ball++;
    }
  }

  return { strike, ball };
}
