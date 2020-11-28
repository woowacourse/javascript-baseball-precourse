export default function BaseballGame() {
  const genRandomNum = () => {
    let originalNums = [];
    let num = "";

    for (let i=1; i<10; i++) {
      originalNums.push(i);
    }
    
    for (let i=0; i<3; i++) {
      let randomIdx = Math.floor(Math.random()*(9-i));
      num += originalNums[randomIdx];  
      originalNums.splice(randomIdx, 1);
    }
    
    return num;   
  }
}

new BaseballGame();
