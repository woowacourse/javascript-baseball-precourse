function printCorrect($result) {
  $result.innerHTML = `
    <div>
      <div>
      🎉<strong>정답을 맞추셨습니다</strong>🎉
      </div>
      <br/>
      <div>
      <span>게임을 새로 시작하시겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>
      </div>
     </div>`;
  return true;
}

function printInCorrect($result, result) {
  $result.textContent = result;
  return false;
}

export default function printGameResult(result) {
  const $result = document.querySelector('#result');

  if (result === '정답') {
    document.getElementById('user-input').readOnly = true;
    return printCorrect($result);
  }
  return printInCorrect($result, result);
}
