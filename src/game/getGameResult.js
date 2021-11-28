function isRightAnswer(computerInput, userInput) {
  return computerInput === userInput;
}

export default function getGameResult(computerInput, userInput) {
  if (isRightAnswer(computerInput, userInput)) return "정답";
  return "출력할 결과물";
}