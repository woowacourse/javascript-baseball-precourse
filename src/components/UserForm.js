import component from '../core/component.js';
import { $ } from '../utils/dom.js';
import { GAME_STATUS } from '../constants.js';

export default class UserForm extends component {
  constructor() {
    super();
    this._inputElement = $('#user-input', this.container);
  }

  bindEvent() {
    this.appendRootEvent('submit', this.props.onSubmit);
  }

  render() {
    if (this.props.gameStatus !== GAME_STATUS.READY) return;
    this._inputElement.value = '';
    this._inputElement.focus();
  }
}
