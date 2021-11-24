export function getComputerInput() {
    let randomNumbers = [];
    let i = 0;
    while (i < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!isDuplicated(randomNum)) {
        randomNumbers.push(randomNum);
        i++;
      }
    }
  
    function isDuplicated(number) {
      return randomNumbers.find((element) => element === number);
    }
    
    return randomNumbers;
  }
  