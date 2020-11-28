import HandleInit from './handleInit.js';

export default function HandleResult() {
  const _resultArea = document.querySelector('#result');
  const _button = document.querySelector("#submit");
  const _input = document.querySelector("#user-input");
  let _blockInput = false;

  this.IsCorrect = function () {
    _blockInput = true;

    DisplaySuccessMessage();

    while (_blockInput === true) {
      BlockBeforeRestart();
    }

    if (_blockInput === false)
      return HandleRestartButton();
  }

  const BlockBeforeRestart = () => {
    _button.addEventListener('click', () => {
      alert('게임을 재시작해주세요')
    })

    _input.addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
        alert('게임을 재시작해주세요')
    })
  }

  const DisplaySuccessMessage = () => {
    let restartMessage = document.createElement('span');
    let restartButton = document.createElement('button');

    restartMessage.textContent = '게임을 새로 시작하시겠습니까?';
    restartButton.textContent = '게임 재시작';
    _resultArea.innerHTML = `<h4>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</h4>`;

    _resultArea.appendChild(restartMessage);
    _resultArea.appendChild(restartButton);
  }

  const HandleRestartButton = (restartButton) => {
    const InitUtils = new HandleInit();

    restartButton.addEventListener('click', () => {
      let answer = InitUtils.InitGame(_resultArea, _input);
    })

    return answer;
  }

  this.IsWrong = function (resultMessage) {
    _resultArea.textContent = resultMessage;
  }
}