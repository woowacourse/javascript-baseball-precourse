export function wrongResultHandler(ball, strike) {
  let result = '';
  if (ball > 0 && strike > 0) {
    result = `${ball}볼 ${strike}스트라이크`;
  } else if (ball > 0 && strike === 0) {
    result = `${ball}볼`;
  } else if (ball === 0 && strike > 0) {
    result = `${strike}스트라이크`;
  } else {
    result = '낫싱';
  }
  document.getElementById('result').innerHTML = result;
}

export function winHandler(callback) {
  document.getElementById('result').innerHTML = '🎉정답을 맞추셨습니다!🎉';
  const restart = document.querySelector('#restartTemplate');
  const clone = document.importNode(restart.content, true);
  clone.getElementById('restartbtn').addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    document.getElementById('restart').innerHTML = '';
    callback();
  });
  document.getElementById('restart').appendChild(clone);
}
