import Component from '../core/component.js';
import { replaceChild, createElement } from '../utils/dom.js';
import { GAME_STATUS } from '../constants.js';

export default class GameResult extends Component {
  bindEvent() {
    this.appendRootEvent('click', ({ target }) => {
      if (target.id !== 'game-restart-button') return;
      this.handlers.onClickRestart();
    });
  }

  render() {
    const { hint, gameStatus } = this.props;
    const renderByStatus = {
      [GAME_STATUS.READY]: '',
      [GAME_STATUS.PLAYING]: hint,
      [GAME_STATUS.END]: `
      <p>🎉 정답을 맞추셨습니다 🎉</p>
        <span> 게임을 새로 시작하시겠습니까? </span>
      <button id="game-restart-button">게임 재시작</button>
    `,
    };
    replaceChild(this.container, createElement(renderByStatus[gameStatus]));
  }
}
