import createComputerInputNumbers from './createComputerInputNumbers';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

console.log(createComputerInputNumbers());
