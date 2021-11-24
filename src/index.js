const initialState = {
  computerInputNumbers: MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3),
  userInputNumbers: [],
  balls: 0,
  strikes: 0,
};

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
