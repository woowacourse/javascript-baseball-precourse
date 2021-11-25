import countStrikeAndBall from './countStrikeAndBall';

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

// 기능 3 테스트
console.log(countStrikeAndBall([1, 2, 3], [1, 2, 3]));
console.log(countStrikeAndBall([1, 2, 3], [4, 5, 6]));
console.log(countStrikeAndBall([1, 2, 3], [3, 4, 5]));
console.log(countStrikeAndBall([1, 2, 3], [4, 3, 2]));
console.log(countStrikeAndBall([1, 2, 3], [3, 1, 2]));
console.log(countStrikeAndBall([1, 2, 3], [1, 4, 5]));
console.log(countStrikeAndBall([1, 2, 3], [1, 3, 4]));
console.log(countStrikeAndBall([1, 2, 3], [1, 3, 2]));
console.log(countStrikeAndBall([1, 2, 3], [1, 2, 4]));
