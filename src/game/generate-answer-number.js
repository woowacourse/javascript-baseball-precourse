import { ANSWER_RANGE, BASEBALL_NUMBER_LENGTH } from "../constant/index.js";

export const generateAnswerNumber = () => {
  const randomNumberSet = new Set();
  while (randomNumberSet.size < BASEBALL_NUMBER_LENGTH) {
    randomNumberSet.add(
      MissionUtils.Random.pickNumberInRange(ANSWER_RANGE.MIN, ANSWER_RANGE.MAX)
    );
  }

  return [...randomNumberSet].join("");
};
