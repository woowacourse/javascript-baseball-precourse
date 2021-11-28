import { NUMBER_RULE } from "../constants/constants.js";

export function generateComputerNumber() {
  const computerInputNumbers = [];

  while (computerInputNumbers.length < NUMBER_RULE.LENGTH) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      NUMBER_RULE.DIGIT_MIN,
      NUMBER_RULE.DIGIT_MAX
    );

    if (!computerInputNumbers.includes(randomNumber)) {
      computerInputNumbers.push(randomNumber);
    }
  }

  return computerInputNumbers.join("");
}
