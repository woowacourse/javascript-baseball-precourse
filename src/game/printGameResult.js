function textContent(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return `<div>
              <strong>🎉정답입니다🎉</strong>
              <button id="game-restart-button">게임 재시작</button>
            </div>`;
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
