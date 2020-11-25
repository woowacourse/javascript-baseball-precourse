export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

const getRandomNumber = function () {
  return Math.floor(Math.random() * Math.floor(9)) + 1;
}

const computingNumber = function () {
  const numberArray = []
  let number = 0
  let counter = 0

  while (counter < 3) {
    const randomNumber = getRandomNumber()
    if (numberArray.indexOf(randomNumber) !== -1) {
      continue
    }
    else {
      numberArray.push(randomNumber)
      number += Math.pow(10, counter) * randomNumber
      counter++
    }
  }

  return number
}

const parseNumber = function (number) {
  const numberArray = []
  for (let i = 0; i < 3; i++){
    const partNumber = Math.floor(number / Math.pow(10, i)) % 10
    if (numberArray.indexOf(partNumber) === -1)
      numberArray.push(partNumber)
  }

  return numberArray
}

new BaseballGame();