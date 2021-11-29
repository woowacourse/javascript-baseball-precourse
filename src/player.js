export default class Player {
  #size; // 추리해야 하는 숫자 개수
  #answer; // 정답 숫자 리스트 (길이: #size)

  constructor(size) {
    this.#size = size;
    this.setRandomAnswer();
  }

  get size() {
    return this.#size;
  }

  get answer() {
    return this.#answer;
  }

  setRandomAnswer() {
    this.#answer = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      this.#size
    );
  }
}
