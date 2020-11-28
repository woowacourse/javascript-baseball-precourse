export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }
}

function isAlright(input){
  const inputSet = new Set();
  let retValue = false;

  [...input].forEach(element => {
    inputSet.add(element);
  });
  //숫자인지, 중복이 존재하는지, 숫자길이가 3인지
  if(!isNaN(input*1) && inputSet.size === 3 && String(input).length === 3){
    retValue = true
  }
  return retValue;
}

function submitInput() {
  const userInput = document.getElementById("user-input");
  const inputValue = userInput.value;

  //이상한 입력은 아닌지 체크
  if(isAlright(inputValue)){
    console.log("올바른 입력");
  }else{
    alert("중복없는 숫자 3개를 써주세요.");
    userInput.value = "";
  }
}


const submitButton = document.getElementById("submit").addEventListener("click",submitInput);
const game = new BaseballGame();