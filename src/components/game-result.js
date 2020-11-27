import { VICTORY_MESSAGE } from '../library/constants/playResult.js';

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
    const restartTemplate = `
      <div>
        게임을 새로 시작하시겠습니까?
        <button id="game-restart-button">재시작</button>
      <div>
    `;
    this.#$target.innerHTML = result;
    if (result === VICTORY_MESSAGE) {
      this.#$target.innerHTML += restartTemplate;
    }
  };
}

export default GameResult;
