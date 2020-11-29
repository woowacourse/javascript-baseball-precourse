function textContent(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return '정답입니다';
  }
  if (!strikeCount && !ballCount) {
    return '낫싱';
  }
  if (strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
  if (strikeCount && !ballCount) {
    return `${strikeCount}스트라이크`;
  }
  if (!strikeCount && ballCount) {
    return `${ballCount}볼`;
  }
}

export default function printGameResult(strikeCount, ballCount) {
  const $result = document.querySelector('#result');

  $result.textContent = textContent(strikeCount, ballCount);
}
