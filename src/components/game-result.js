class GameResult {
  #$target;
  #props;

  constructor($target, props) {
    this.#$target = $target;
    this.#props = props;
    props.playResult.subscribe(this.render);
  }

  render = () => {
    const result = this.#props.playResult.value;
    this.#$target.innerHTML = result;
    if (result === '정답') {
      this.#$target.innerHTML += '재도전?';
    }
  };
}

export default GameResult;
