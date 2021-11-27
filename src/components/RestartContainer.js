const RestartContainer = ({ resultContainer, onClickRestartCallback }) => {
  resultContainer.innerHTML = `<div id='restart-container'>
      <p><strong>🎉 정답을 맞추셨습니다! 🎉</strong></p>
      <span>게임을 새로 시작하시겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>
    </div>`;

  const restartBtn = document.querySelector("#game-restart-button");
  restartBtn.addEventListener("click", () => {
    onClickRestartCallback();
    resultContainer.innerHTML = "";
  });
};

export default RestartContainer;
