import {BASEBALL} from "./constants.js"

export default function BaseballGame() {
  let computerInputNumbers = '';

  const getComputerNum = () => {
    let numList = new Array();

    while (numList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numList.includes(num)) {
        numList.push(num);
        computerInputNumbers += String(num);
      }
    }

    return computerInputNumbers
  };

  getComputerNum();
}

new BaseballGame();
