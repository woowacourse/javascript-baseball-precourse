const $ = selector => document.querySelector(selector);

export default class BaseballGame {
  generateAnswer() {
    const answer = [];

    while (answer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNum)) answer.push(randomNum);
    }
    return answer.join('');
  }

  generateUserInput() {
    const userInput = $('#user-input');
    const button = $('#submit');

    const userInputValidation = value => {
      const validation = {
        isError: false,
        inValidText: '',
      };

      if (!value) {
        validation.isError = true;
        validation.inValidText = '값을 입력해주세요.';
        return validation;
      }

      if (isNaN(Number(value))) {
        validation.isError = true;
        validation.inValidText = '숫자를 입력해주세요.';
        return validation;
      }

      if (value.length !== 3) {
        validation.isError = true;
        validation.inValidText = '숫자 3개를 입력해주세요.';

        return validation;
      }

      const set = new Set(value.split(''));
      if (value.length !== set.size) {
        validation.isError = true;
        validation.inValidText =
          '중복된 숫자를 입력하였습니다. 다시 입력해주세요.';
        return validation;
      }

      return validation;
    };

    const handleSubmitUserInput = e => {
      e.preventDefault();
      let val = userInput.value.trim();
      const { isError, inValidText } = userInputValidation(val);

      if (isError) {
        alert(inValidText);
        userInput.value = '';
        return;
      }

      this.play(123, userInput.value);

      return userInput.value;
    };
    button.addEventListener('click', handleSubmitUserInput);
  }

  play(computerInputNumbers, userInputNumbers) {
    const compareAnswer = (computerInputNumbers, userInputNumbers) => {
      const computerNums = String(computerInputNumbers).split('');
      const userNums = String(userInputNumbers).split('');

      let balls = 0;
      let strikes = 0;

      for (let i = 0; i < computerNums.length; i++) {
        if (computerNums[i] === userNums[i]) {
          strikes++;
          continue;
        }
        if (computerNums.includes(userNums[i])) balls++;
      }

      if (strikes === 3) {
        $('#result').innerHTML = `
        <h4>👍 정답을 맞추셨습니다. 게임을 새로 시작하시겠습니까?</h4>
        <button id="game-restart-button">재시작</button>
        `;
      }

      const restartButton = $('#game-restart-button');

      restartButton.addEventListener('click', () => {
        $('#user-input').value = '';
        $('#result').innerHTML = '';
        this.generateAnswer();
      });
    };

    compareAnswer(computerInputNumbers, userInputNumbers);
  }
}

const baseballGame = new BaseballGame();
baseballGame.generateAnswer();
baseballGame.generateUserInput();
