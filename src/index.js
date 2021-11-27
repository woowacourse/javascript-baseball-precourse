export default class BaseballGame {
    constructor() {
        this.init();
    }

    init() {
        this.computerNumbers = this.createComputerNumbers();
        console.log(this.computerNumbers);
    }

    createComputerNumbers() {
        let computerNumbers = [];
        while( computerNumbers.length !== 3 ) {
            const curNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if ( !computerNumbers.includes(curNum) ) 
                computerNumbers.push(curNum);
        }
        return computerNumbers;
    }

    play(computerInputNumbers, userInputNumbers) {
      return "결과 값 String";
    }
  }

  
  new BaseballGame();