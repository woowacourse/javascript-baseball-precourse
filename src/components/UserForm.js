import component from '../core/component.js';
import { $ } from '../utils/dom.js';
import { parseInput } from '../utils/input.js';
import { GAME_STATUS } from '../constants.js';

export default class UserForm extends component {
  initDoms() {
    this._inputElement = $('#user-input', this.container);
  }

  bindEvent() {
    this.appendRootEvent('submit', event => {
      event.preventDefault();
      this.props.onSubmit(parseInput(this._inputElement.value));
    });
  }

  render() {
    if (this.props.gameStatus !== GAME_STATUS.READY) return;
    this._inputElement.value = '';
    this._inputElement.focus();
  }
}
