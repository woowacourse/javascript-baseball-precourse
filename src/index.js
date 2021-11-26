const VALID_NUMBER_LENGTH = 3;
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 9;

function BaseballGame() {
  this.randomNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

  const getRandomNumber = (MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER) => {
    const randomNumberArray = [];
    while (randomNumberArray.length < VALID_NUMBER_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        MIN_RANDOM_NUMBER,
        MAX_RANDOM_NUMBER,
      );
      if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber);
      }
    }

    return randomNumberArray.join('');
  };
}
const game = new BaseballGame();
