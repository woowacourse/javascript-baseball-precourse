export default function BaseballGame() {
  this.getRandNum = () => {
    let ret = '';
    
    for(let i=0; i<3; ++i) {
      const tmpN = Math.floor(Math.random()*9 + 1);
      ret += tmpN.toString();
    }

    return ret;
  };

  this.isValidInput = (userInput) => {
    // 1~9가 아닌 문자와 일치할 경우
    if(/[^1-9]/.test(userInput)) return false;

    // 3자리 인지 확인
    if(userInput.length !== 3) return false;

    // 중복 확인
    if(userInput[0] === userInput[1] || userInput[1] === userInput[2] || userInput[2] === userInput[0])
      return false;
    
    return true;
  };
  
  this.play = (computerInputNumbers, userInputNumbers) => {
    return "결과 값 String";
  };
  
  
  this.comNum = this.getRandNum();
}

let BG = new BaseballGame();
console.log("123 : " + BG.isValidInput("123"));
console.log("1234 : " + BG.isValidInput("1234"));
console.log("120 : " + BG.isValidInput("120"));
console.log("12j : " + BG.isValidInput("12j"));
console.log("12 : " + BG.isValidInput("12"));
console.log("122 : " + BG.isValidInput("122"));