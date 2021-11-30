import {
  INPUT_LENGTH,
  ANSWER,
  NOTHING,
} from "../constant/constant.js";

function isRightAnswer(computerInput, userInput) {
  return computerInput === userInput;
}

function countBall(computerInput, userInput) {
  let ballCount = 0;

  for (let i = 0; i < INPUT_LENGTH; i += 1) {
    if (userInput.find((elem, idx) => idx !== i && elem === computerInput[i])) {
      ballCount += 1;
    }
  }
  return ballCount !== 0 ? `${ballCount}볼` : "";
}

function countStrike(computerInput, userInput) {
  let strikeCount = 0;

  for (let i = 0; i < INPUT_LENGTH; i += 1) {
    if (userInput.find((elem, idx) => idx === i && elem === computerInput[i])) {
      strikeCount += 1;
    }
  }
  return strikeCount !== 0 ? `${strikeCount}스트라이크` : "";
}

export default function getGameResult(computerInput, userInput) {
  let ballCount = "";
  let strikeCount = "";

  console.log(computerInput, userInput);
  if (isRightAnswer(computerInput, userInput)) return ANSWER;
  ballCount = countBall(String(computerInput).split(""), String(userInput).split(""));
  strikeCount = countStrike(String(computerInput).split(""), String(userInput).split(""));
  if (ballCount === "" && strikeCount === "") return NOTHING;
  if (ballCount === "" && strikeCount !== "") return strikeCount;
  if (ballCount !== "" && strikeCount === "") return ballCount;
  return `${ballCount} ${strikeCount}`;
}
