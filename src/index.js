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
}

let game = new BaseballGame();
