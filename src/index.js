export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

const input = document.getElementById('user-input');
submit.onclick = () => {
  const inputArrays = input.value.split('');
  // 중복된 값 체크
  if (
    inputArrays[0] === inputArrays[1] ||
    inputArrays[1] === inputArrays[2] ||
    inputArrays[0] === inputArrays[2] ||
    inputArrays.length !== 3
  ) {
    alert('숫자가 유효하지 않습니다. 다시 입력해주세요!'); // 중복 발생시 alert
    input.value = '';
    input.focus();
  }
};
// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
