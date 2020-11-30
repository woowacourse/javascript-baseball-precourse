import {
  NAN_MESSAGE,
  WRONG_NUMBER_MESSAGE,
  DUPLICATE_NUMBER_MESSAGE,
  HAS_ZERO_MESSAGE,
} from '../library/constants/alert-message.js';
import { MIN3DIGIT } from '../library/constants/number.js';
import { INITIAL_STATE_NUMBER } from '../library/constants/state.js';
import Component from '../library/core/component.js';
import { hasDuplicateCharacter } from '../library/utils/check.js';

class UserInput extends Component {
  #$userInput;

  constructor($target, props) {
    super($target, props);
    this.#$userInput = $target.querySelector('#user-input');
    props.userNumber.subscribe(this.render);
  }

  initializeEventListener() {
    this._$target.addEventListener('submit', event => this.onSubmit(event));
  }

  onSubmit(event) {
    const input = this.#$userInput.value;
    event.preventDefault();
    if (this.isValidInput(input)) {
      this._props.userNumber.value = parseInt(input, 10);
    } else {
      this.alertByCase(input);
      this.clearInput();
      this.#$userInput.focus();
    }
  }

  isValidInput(input) {
    const inputNumber = Number(input);

    return (
      !isNaN(inputNumber) &&
      input.length === 3 &&
      inputNumber >= MIN3DIGIT &&
      input.indexOf('0') === -1 &&
      !hasDuplicateCharacter(input)
    );
  }

  alertByCase = input => {
    const errors = [];
    const inputNumber = Number(input);
    if (isNaN(inputNumber)) {
      errors.push(NAN_MESSAGE);
    } else {
      if (input.indexOf('0') !== -1) {
        errors.push(HAS_ZERO_MESSAGE);
      }
      if (input.length !== 3 || inputNumber < MIN3DIGIT) {
        errors.push(WRONG_NUMBER_MESSAGE);
      }
      if (hasDuplicateCharacter(input)) {
        errors.push(DUPLICATE_NUMBER_MESSAGE);
      }
    }
    const errorString = errors.join(', ');
    const ALERT_MESSAGE = `${errorString}를 입력했습니다. 재입력해주세요.`;
    alert(ALERT_MESSAGE);
  };

  clearInput = () => {
    this.#$userInput.value = '';
  };

  render = () => {
    if (this._props.userNumber.value === INITIAL_STATE_NUMBER) {
      this.clearInput();
    }
  };
}

export default UserInput;
