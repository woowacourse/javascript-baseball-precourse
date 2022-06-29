//3. 입력한 숫자와 생성한 숫자 비교
export default function compareNumber(targetArray, comparisonArray) {
  let strike = 0;
  let ball = 0;
  let resultString = "";

  for (let i = 0; i < 3; i++) {
    if (targetArray[i] === comparisonArray[i]) {
      strike++;
    } else if (targetArray.includes(comparisonArray[i])) {
      ball++;
    }
  }
  if (strike !== 0 || ball !== 0) {
    if (strike === 3) {
      resultString = "정답!";
    } else {
      resultString = `${ball}볼 ${strike}스크라이크`;
    }
  } else if (strike === 0 && ball === 0) {
    resultString = "낫싱";
  } else {
    resultString = "";
  }
  return resultString;
}
