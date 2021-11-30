function showCorrectResult(resultDiv) {
  resultDiv.innerHTML = `<div>
    <strong>🎉정답입니다🎉</strong>
    <br/>
    <p>게임을 새로 시작하시겠습니까?</p>
    <button id="game-restart-button">게임 재시작</button>
   </div>`;
}

function showIncorrectResult(resultDiv, result) {
  resultDiv.textContent = result;
}

export default function showResult(result) {
  const resultDiv = document.getElementById("result");
  if (result === "정답") {
    showCorrectResult(resultDiv);
    return true;
  }
  showIncorrectResult(resultDiv, result);
  return false;
}
