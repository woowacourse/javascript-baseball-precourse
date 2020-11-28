import { VICTORY_MESSAGE } from '../library/constants/playResult.js';
import Component from '../library/core/component.js';

class GameResult extends Component {
  constructor($target, props) {
    super($target, props);
    props.playResult.subscribe(this.render);
  }

  initializeEventListener() {
    this._$target.addEventListener('click', event => this.onClick(event));
  }

  onClick = event => {
    if (event.target.id === 'game-restart-button') {
      this._props.restart();
    }
  };

  render = () => {
    const result = this._props.playResult.value;
    const RESTART_TEMPLATE = `
      <div>
        게임을 새로 시작하시겠습니까?
        <button id="game-restart-button">재시작</button>
      <div>
    `;
    this._$target.innerHTML = result;
    if (result === VICTORY_MESSAGE) {
      this._$target.innerHTML += RESTART_TEMPLATE;
    }
  };
}

export default GameResult;
