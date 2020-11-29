function textContent(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return `<h4>🎉정답입니다🎉</h4>`;
  }
  if (!strikeCount && !ballCount) {
    return `<h4>낫싱</h4>`;
  }
  if (strikeCount && ballCount) {
    return `<h4>${ballCount}볼 ${strikeCount}스트라이크⚾️</h4>`;
  }
  if (strikeCount && !ballCount) {
    return `<h4>${strikeCount}스트라이크⚾️</h4>`;
  }
  if (!strikeCount && ballCount) {
    return `<h4>${ballCount}볼</h4>`;
  }
}

export default function printGameResult(strikeCount, ballCount) {
  const $result = document.querySelector('#result');

  $result.innerHTML = textContent(strikeCount, ballCount);
}
