/* eslint-disable no-undef */
import { $, isInValid } from './common/index.js';
import BaseballGame from './components/index.js';
import { BASEBALL } from './constants/index.js';

const baseball = new BaseballGame({
  digit: BASEBALL.DIGIT,
  start: BASEBALL.START,
  end: BASEBALL.END,
});

const $input = $('#user-input');
$input.setAttribute('maxLength', BASEBALL.DIGIT * 2);

const $button = $('#submit');
/* eslint-disable consistent-return */
$button.addEventListener('click', event => {
  event.preventDefault();
  const { value } = $input;
  $input.focus();
  if (isInValid(value)) $input.value = '';
});
