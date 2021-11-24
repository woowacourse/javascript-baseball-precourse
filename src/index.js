/* eslint-disable no-undef */
import { $ } from './common/index.js';

const BASEBALL_DIGIT = 3;

const isDuplicate = value => {
  const target = value.split('');
  const converted = new Set(target);
  return target.length !== converted.size;
};

const $input = $('#user-input');
$input.setAttribute('maxLength', BASEBALL_DIGIT * 2);

const $button = $('#submit');
/* eslint-disable consistent-return */
$button.addEventListener('click', event => {
  event.preventDefault();
  const { value } = $('#user-input');
  /* eslint-disable no-alert */
  if (Number.isNaN(+value)) return alert('옳지 못한 값입니다.');
  if (isDuplicate(value)) return alert('중복된 값은 입력될 수 없습니다.');
});
