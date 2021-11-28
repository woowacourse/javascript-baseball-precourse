export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    const generateAnswer = () => {
      const answer = [];

      while (answer.length < 3) {
        const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!answer.includes(randomNum)) answer.push(randomNum);
      }
      return answer;
    };

    generateAnswer();
  }
}

const baseballGame = new BaseballGame();
baseballGame.play(123, 456);
