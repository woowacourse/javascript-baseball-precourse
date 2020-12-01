import BaseballGame from './baseball_game.js';

const getRandNum = () => {
  let ret = '';
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // 중복을 피하기 위해 nums에서 랜덤으로 하나씩 splice하여 가져온다.
  
  for(let i=0; i<3; ++i) {
    const tmpN = nums.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    ret += tmpN.toString();
  }

  return ret;
};

const addNewInput = (e) => {
  const idx = ++window.idx;

  const container = document.createElement('div');
  container.innerHTML = `
    <input type="text" id="user-input-${idx}" />
    <button id="submit-${idx}" data-index="${idx}">확인</button>
    <h3>📄 결과</h3>
    <div id="result-${idx}"></div>
  `;

  const hr = document.createElement('hr');
  hr.className = 'hr-line';

  const app = e.target.closest('#app');
  app.append(hr);
  app.append(container);  

  container.children[0].focus();
};

const endGame = (e) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h4>🎉정답을 맞추셨습니다!🎉</h4>
    <span>게임을 새로 시작하시겠습니까?</span>
    <button id="game-restart-button" data-restart>게임 재시작</button>
  `;

  e.target.closest('#app').append(container);
  window.idx = -1;
}

const submitNums = (e) => {
  const userInput = e.target.parentNode.children[0]; // input
  const userInputValue = userInput.value;

  if(!BG.isValidInput(userInputValue)) {
    alert('올바른 입력이 아닙니다. 1~9사이의 수 3자리를 중복없이 입력해주세요.');
    userInput.value = '';
    return;
  }

  // 기존 input 비활성화
  userInput.setAttribute('readonly', 'readonly');

  const result = BG.play(window.comNum, userInputValue);
  if(result === '정답') {
    endGame(e);
  } else {
    // div id="result-{idx}"
    e.target.parentNode.children[3].innerHTML = result;
    addNewInput(e);
  }
};

const onClickSubmitBtn = (e) => {
  const idx = window.idx;
  if(e.target.dataset.index !== idx.toString()) {
    return;
  }

  submitNums(e);
}

const onPressEnter = (e) => {
  const btnElm = e.target.parentNode.children[1]; // button
  const idx = window.idx;
  if(btnElm.dataset.index !== idx.toString()) {
    return;
  }

  if(e.keyCode === 13) {
    submitNums(e);
  }
};

const onClickRestartBtn = (e) => {
  if(e.target.dataset.restart === undefined) {
    return;
  }

  window.idx = 1;
  window.comNum = getRandNum();

  e.target.closest('#app').innerHTML = `
    <h1>⚾ 숫자 야구 게임</h1>
    <p>
      <strong>1~9까지의 수</strong>를 중복없이 <strong>3개</strong>를
      작성해주세요. <br />
      올바른 예) 139 <br />
      틀린 예) 122
    </p>
    <div>
      <input type="text" id="user-input-1" />
      <button id="submit-1" data-index="1">확인</button>
      <h3>📄 결과</h3>
      <div id="result-1"></div>
    </div>
  `;
};

const BG = new BaseballGame();
const app = document.getElementById('app');
window.comNum = getRandNum();
window.idx = 1;

app.addEventListener('click', onClickSubmitBtn);
app.addEventListener('click', onClickRestartBtn);
app.addEventListener('keyup', onPressEnter);