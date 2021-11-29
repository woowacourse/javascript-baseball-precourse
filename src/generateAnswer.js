// generate three digit number, with each digits unique
const generateAnswer = function generateThreeDigitUniqueAnswer() {
  let numberString = "";
  let digit;

  // loop three times
  while (numberString.length < 3) {
    // get random unique int and concat to string
    digit = generateUniqueNumber(numberString);
    numberString += digit;
  }

  // return generated as int
  return numberString;
};

// helper function: generate single digit unique integer
const generateUniqueNumber = function generateSingleUniqueNumber(str) {
  // generate random number
  let num = MissionUtils.Random.pickNumberInRange(1, 9);

  // regenerate until unique
  while (str.includes(num)) {
    num = MissionUtils.Random.pickNumberInRange(1, 9);
  }

  return num;
};

export default generateAnswer;
