import { INPUT_DIGIT } from "../input/getComputerInput.js";

function isRightAnswer(computerInput, userInput) {
  return computerInput === userInput;
}

function countBall(computerInput, userInput) {
  let ballCount = 0;

  for (let i = 0; i < INPUT_DIGIT; i += 1) {
    if (userInput.find((elem, idx) => idx !== i && elem === computerInput[i])) {
      ballCount += 1;
    }
  }
  return ballCount !== 0 ? `${ballCount}볼` : "";
}

export default function getGameResult(computerInput, userInput) {
  let ballCount = "";

  if (isRightAnswer(computerInput, userInput)) return "정답";
  ballCount = countBall(computerInput.split(""), userInput.split(""));

  return "출력할 결과물";
}
