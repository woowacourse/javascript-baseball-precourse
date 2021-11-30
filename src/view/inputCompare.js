function getGameResultText(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return "정답";
  }
  if (strikeCount === 0 && ballCount) {
    return `${ballCount}볼`;
  }
  if (strikeCount && ballCount === 0) {
    return `${strikeCount}스트라이크`;
  }
  if (strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  } else {
    return "낫싱";
  }
}

function checkStrikeBall(el, index, countArray, computerInputArray) {
  if (!computerInputArray.includes(el)) {
    return;
  } else if (computerInputArray[index] === el) {
    countArray[0]++;
  } else {
    countArray[1]++;
  }
}

function checkCount(computerInputNumbers, userInputNumbers) {
  const countArray = [0, 0];
  const computerInputArray = String(computerInputNumbers).split("");
  const userInputArray = String(userInputNumbers).split("");

  userInputArray.forEach((el, index) => {
    checkStrikeBall(el, index, countArray, computerInputArray);
  });

  return countArray;
}

export default function inputCompare(computerInputNumbers, userInputNumbers) {
  const [strikeCount, ballCount] = checkCount(
    computerInputNumbers,
    userInputNumbers
  );

  return getGameResultText(strikeCount, ballCount);
}
