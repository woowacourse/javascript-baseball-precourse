import { VICTORY_MESSAGE } from '../library/constants/playResult.js';

class GameResult {
  #$target;
  #props;

  constructor($target, props) {
    this.#$target = $target;
    this.#props = props;
    props.playResult.subscribe(this.render);
    this.initEventListener();
  }

  initEventListener = () => {
    this.#$target.addEventListener('click', event => this.onClick(event));
  };

  onClick = event => {
    if (event.target.id === 'game-restart-button') {
      this.#props.restart();
    }
  };

  render = () => {
    const result = this.#props.playResult.value;
    const RESTART_TEMPLATE = `
      <div>
        게임을 새로 시작하시겠습니까?
        <button id="game-restart-button">재시작</button>
      <div>
    `;
    this.#$target.innerHTML = result;
    if (result === VICTORY_MESSAGE) {
      this.#$target.innerHTML += RESTART_TEMPLATE;
    }
  };
}

export default GameResult;
