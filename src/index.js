import { $ } from "./utils/dom.js"

export default function BaseballGame() {
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";  
  };

  const createAnswer = () => {
    const answerNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return answerNumber;
  };
} 

new BaseballGame();