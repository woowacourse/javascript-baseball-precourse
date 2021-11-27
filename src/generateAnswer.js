// generate three digit number, with each digits unique
export default function generateAnswer() {
  let numberString = "";
  let digit;

  // loop three times
  for (let i = 0; i < 3; i++) {
    // get random unique int and concat to string
    digit = generateUniqueNumber(numberString);
    numberString += digit;
  }

  // return generated as int
  return numberString;
}

// helper function: generate single digit unique integer
function generateUniqueNumber(str) {
  // generate random number
  let num = MissionUtils.Random.pickNumberInRange(1, 9);

  // regenerate until unique
  while (str.includes(num)) {
    num = MissionUtils.Random.pickNumberInRange(1, 9);
  }

  return num;
}
