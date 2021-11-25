import createComputerInputNumbers from './createComputerInputNumbers';
import validateInput from './validateInput';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

// 기능 2 테스트
console.log(validateInput(''));
console.log(validateInput('1'));
console.log(validateInput('12'));
console.log(validateInput('1234'));
console.log(validateInput('11d'));
console.log(validateInput('019'));
console.log(validateInput('112'));
console.log(validateInput('123'));
