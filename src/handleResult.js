import HandleInit from './handleInit.js';

export default function HandleResult() {
  let _blockInput = false;

  this.IsCorrect = function (ResultArea, input) {
    _blockInput = true;

    while (_blockInput === true) {
      BlockBeforeRestart();
    }

    if (_blockInput === false)
      return DisplaySuccessMessage(ResultArea, input);
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

  const DisplaySuccessMessage = (resultArea, input) => {
    let restartMessage = document.createElement('span');
    let restartButton = document.createElement('button');

    restartMessage.textContent = '게임을 새로 시작하시겠습니까?';
    restartButton.textContent = '게임 재시작';
    resultArea.innerHTML = `<h4>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</h4>`;

    resultArea.appendChild(restartMessage);
    resultArea.appendChild(restartButton);

    let answer = HandleRestartButton(resultArea, input, restartButton);

    return answer;
  }

  const HandleRestartButton = (resultArea, input, restartButton) => {
    const InitUtils = new HandleInit();
    let answer = '';

    restartButton.addEventListener('click', () => {
      answer = InitUtils.InitGame(resultArea, input);
    })

    return answer;
  }
}