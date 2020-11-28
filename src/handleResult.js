export default function HandleResult() {
  let _blockInput = false;

  this.IsCorrect = function () {
    _blockInput = true;

    while (_blockInput === true) {
      BlockBeforeRestart();
    }

    DisplaySuccessMessage();

    HandleRestartButton();
  }

  const BlockBeforeRestart = (button, input) => {
    button.addEventListener('click', () => {
      alert('게임을 재시작해주세요')
    })

    input.addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
        alert('게임을 재시작해주세요')
    })
  }
}