const NUMBER_LENGTH = 3;

export default class BaseballGame {
  constructor() {
    this.initialize();
    this.setEventListener();
  }

  initialize() {
    this.computerNumbers = this.generateComputerNumbers();
    this.resetEl();
    this.el.userInput.focus();
  }

  resetUI() {
    this.el.gameContainer.innerHTML = `
      <form id="game-form">
        <input type="text" id="user-input" />
        <button id="submit">확인</button>
      </form>
      <h3>📄 결과</h3>
      <div id="result"></div>
    `;
  }

  resetEl() {
    this.el = {
      app: document.querySelector('#app'),
      gameContainer: document.querySelector('#game-container'),
      userInput: document.querySelector('#user-input'),
      submit: document.querySelector('#submit'),
      result: document.querySelector('#result'),
      gameForm: document.querySelector('#game-form'),
    };
  }

  setEventListener() {
    const createNewElement = (tag, id, content) => {
      const el = document.createElement(tag);
      
      if (tag === 'input') {
        el.setAttribute('type', 'text');
      }
      if (id) {
        el.id = id;
      }
      if (content) {
        el.append(content);
      }

      return el;
    }

    const removeBeforeAttribute = () => {
      this.el.userInput.removeAttribute('id');
      this.el.submit.removeAttribute('id');
      this.el.result.removeAttribute('id');
      this.el.gameForm.removeAttribute('id');
    }

    const createNewForm = () => {
      const gameFormEl = createNewElement('form', 'game-form');
      const inputEl = createNewElement('input', 'user-input');
      const blankTextNodeEl = document.createTextNode(' ');
      const submitButtonEl = createNewElement('button', 'submit', '확인');
      const h3El = createNewElement('h3', null, '📄 결과');
      const resultDivEl = createNewElement('div', 'result');

      removeBeforeAttribute();

      this.el.gameContainer.appendChild(gameFormEl);
      gameFormEl.appendChild(inputEl);
      gameFormEl.appendChild(blankTextNodeEl);
      gameFormEl.appendChild(submitButtonEl);
      this.el.gameContainer.appendChild(gameFormEl);
      this.el.gameContainer.appendChild(h3El);
      this.el.gameContainer.appendChild(resultDivEl);
    }

    const createRestartButton = () => {
      const restartEl = createNewElement('div', 'restart', '게임을 새로 시작하시겠습니까? ');
      const gameRestartButtonEl = createNewElement('button', 'game-restart-button', '게임 재시작');
      
      restartEl.appendChild(gameRestartButtonEl);
      gameRestartButtonEl.addEventListener('click', handleClickRestart);

      this.el.gameContainer.appendChild(restartEl);
      gameRestartButtonEl.focus();
    }

    const handleClickRestart = () => {
      removeBeforeAttribute();
      this.resetUI();
      this.initialize();
    }

    const showResult = (result) => {
      const { status, string } = result;
      
      const resultTextEl = createNewElement('p', null, string);
      this.el.result.appendChild(resultTextEl);
      if (status === 'finish') {
        resultTextEl.style.fontWeight = 'bold';
      }
    }

    const disableForms = () => {
      const userInputEls = document.querySelectorAll('input');
      const buttonEls = document.querySelectorAll('button');

      userInputEls.forEach((el) => {
        el.setAttribute('disabled', 'disabled');
      });

      buttonEls.forEach((el) => {
        el.setAttribute('disabled', 'disabled');
      });
    }

    const handleSubmitInput = (e) => {
      e.preventDefault();
      if (e.target.id !== 'game-form') return;
      
      const userInputNumbers = this.getUserInput();
      if (userInputNumbers) {
        const result = this.play(this.computerNumbers, userInputNumbers);
        showResult(result);
        if (result.status === 'playing') {
          createNewForm();
        } else {
          disableForms();
          createRestartButton();
        }
        this.resetEl();
        this.el.userInput.focus();
      }
    }
    
    this.el.app.addEventListener('submit', handleSubmitInput);
  }

  getUserInput() {
    let isValid = true;
    const userInput = this.el.userInput.value;
    const userInputNumbers = userInput.split('').map(Number);

    if (isInvalidNumbers(userInputNumbers)) {
      alert('1~9까지의 3자리 숫자를 중복 없이 입력해주세요');
      this.el.userInput.focus();
      isValid = false;
    }

    function isInvalidNumbers(numbers) {
      const visited = [];

      // 길이와 NUMBER_LENGTH가 같지 않다면 invalid함
      return numbers.length !== NUMBER_LENGTH || (
        numbers.some((number) => {
          let isInvalid = false;

          // 1 부터 9 까지의 범위가 아니라면 invalid함
          if (!(number >= 1 && number <= 9)) { 
            isInvalid = true;
          }
          // 중복된 값이라면 invalid함
          else if (visited.includes(number)) {
            isInvalid = true;
          }
          // 중복된 값 체크를 위해 visited 배열에 추가
          else {
            visited.push(number);
          }

          return isInvalid;
        })
      )
    }

    return isValid && userInputNumbers;
  }

  generateComputerNumbers() {
    const numbers = [];

    while (numbers.length < NUMBER_LENGTH) {
      const randomNumber = Math.floor(Math.random() * 9 + 1);
      
      if (isUniqueNumber(numbers, randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    function isUniqueNumber(numbers, randomNumber) {
      return numbers.every((number) => number !== randomNumber);
    }

    return numbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < NUMBER_LENGTH; i++) {
      const computerInputNumber = computerInputNumbers[i];
      const userInputNumber = userInputNumbers[i];

      if (computerInputNumber === userInputNumber) {
        strikeCount += 1;
      } else if (computerInputNumbers.includes(userInputNumber)) {
        ballCount += 1;
      }
    }

    let result = {
      status: 'playing',
      string: '',
    };

    if (ballCount) {
      result.string += `${ballCount}볼 `;
    }
    if (strikeCount) {
      result.string += `${strikeCount}스트라이크`;
    }
    if (ballCount <= 0 && strikeCount <= 0) {
      result.string = '낫싱';
    }
    if (strikeCount === NUMBER_LENGTH) {
      result.status = 'finish';
      result.string = '🎉 정답을 맞추셨습니다! 🎉';
    }

    return result;
  }
}

new BaseballGame();
