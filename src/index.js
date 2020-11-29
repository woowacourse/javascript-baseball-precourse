class BaseballGame {
  constructor() {
    this.answer = this.setAnswer();
  }

  setAnswer() {
    const arr = [];
    let ranNum = Math.floor(Math.random() * 10);

    for (let i = 0; i < 3; i += 1) {
      while (arr.includes(ranNum) === true) {
        ranNum = Math.floor(Math.random() * 10);
      }
      arr.push(ranNum);
    }

    return arr;
  }

  play(userInput) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.answer[i] === Number(userInput[i])) {
        strike += 1;
      } else if (this.answer.includes(Number(userInput[i])) === true) {
        ball += 1;
      }
    }

    return {
      ball,
      strike
    };
  }
}

let game = new BaseballGame();
