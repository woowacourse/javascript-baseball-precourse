export default function BaseballGame() {
  this.getRandNum = () => {
    let ret = '';
    
    for(let i=0; i<3; ++i) {
      const tmpN = Math.floor(Math.random()*9 + 1);
      ret += tmpN.toString();
    }

    return ret;
  };
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";
  };
  
  
  this.comNum = this.getRandNum();
}

let BG = new BaseballGame();
console.log(BG.comNum);