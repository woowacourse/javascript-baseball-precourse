export const INPUT_DIGIT = 3;

export default function getComputerInput() {
  const computerInput = new Set();

  while (computerInput.size < INPUT_DIGIT) {
    computerInput.add(window.MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...computerInput].join("");
}
