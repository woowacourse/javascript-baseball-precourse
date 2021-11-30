const $input = document.getElementById("user-input");
const $submit = document.getElementById("submit");
const $result = document.getElementById("result");

const MIN = 1;
const MAX = 9;
const LENGTH = 3;
const INPUT_ERROR = "1에서 9까지 서로 다른 임의의 수 3개를 입력해주세요!";

export { $input, $submit, $result, MIN, MAX, LENGTH, INPUT_ERROR };
