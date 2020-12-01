import HandleInit from './handleInit.js';

export default function HandleResult() {
  const _resultArea = document.querySelector('#result');
  const _button = document.querySelector("#submit");
  const _input = document.querySelector("#user-input");

  this.DisplaySuccessMessage = function () {
    let restartMessage = document.createElement('span');
    let restartButton = document.createElement('button');

    restartMessage.textContent = '게임을 새로 시작하시겠습니까?';
    restartButton.textContent = '게임 재시작';
    _resultArea.innerHTML = `<h4>🎉<strong> 정답을 맞추셨습니다! </strong>🎉</h4>`;

    _resultArea.appendChild(restartMessage);
    _resultArea.appendChild(restartButton);

    return restartButton;
  };

  this.DisplayFailureMessage = function (resultMessage) {
    _resultArea.textContent = resultMessage;
  };
}