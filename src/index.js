/* eslint-disable no-undef */
import { $, isInValid } from './common/index.js';
import { BASEBALL_DIGIT } from './constants/index.js';

const $input = $('#user-input');
$input.setAttribute('maxLength', BASEBALL_DIGIT * 2);

const $button = $('#submit');
/* eslint-disable consistent-return */
$button.addEventListener('click', event => {
  event.preventDefault();
  const { value } = $input;
  if (isInValid(value)) $input.value = '';
  $input.focus();
});
