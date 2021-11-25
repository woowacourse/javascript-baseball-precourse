/* eslint-disable no-undef */
import { $, isInValid } from './common/index.js';
import BaseballGame from './components/index.js';
import { BASEBALL, EMPTY } from './constants/index.js';

const $input = $('#user-input');
const $button = $('#submit');

const game = new BaseballGame({
  digit: BASEBALL.DIGIT,
  exclude: BASEBALL.ZERO,
  start: BASEBALL.START,
  end: BASEBALL.END,
});

$input.setAttribute('maxLength', BASEBALL.DIGIT * 2);

/* eslint-disable consistent-return */
$button.addEventListener('click', event => {
  event.preventDefault();
  const { value } = $input;
  $input.focus();
  if (isInValid(value)) {
    $input.value = EMPTY;
    return;
  }
  game.play(value);
});
