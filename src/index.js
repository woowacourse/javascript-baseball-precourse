export default class BaseballGame{
  constructor() {
    this.gameStart();
  }
  //컴퓨터 숫자 랜덤 생성
  makeRandomNumIsDiff(numList, num) {
    let numSet = new Set(numList);
    if (numSet.has(num)) {
      return false;
    }
    return true;
  }
  makeRandomNumbers() {
    let numbers = "";
    while (numbers.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.makeRandomNumIsDiff(numbers, String(num))) {
        numbers += String(num);
      }
    }
    return numbers;
  }
  //사용자 입력 숫자 유효성 확인
  checkUserInput(userInput) {
    if (!this.checkUserInputLength(userInput)) {
      return false;
    }
    if (!this.checkUserInputIsNumbers(userInput)) {
      return false;
    }
    if (!this.checkUserInputNumberRange(userInput)) {
      return false;
    }
    if (!this.checkUserInputIsDiff(userInput)) {
      return false;
    }
    return true;
  }
  checkUserInputLength(input) {
    //유저의 숫자 길이가 3인지 확인
    if (input.length === 3) {
      return true;
    }
    return false;
  }
  checkUserInputIsNumbers(input) {
    //유저의 숫자가 모두 숫자인지 확인
    for (let i = 0; i < 3; i++){
      if (isNaN(Number(input[i]))) {
        return false;
      }
    }
    return true;
  }
  checkUserInputNumberRange(input) {
    //유저의 숫자가 모두 1~9 사이인지 확인
    for (let i = 0; i < 3; i++){
      if (1>Number(input[i]) || Number(input[i])>9) {
        return false;
      }
    }
    return true;
  }
  checkUserInputIsDiff(input) {
    //유저의 숫자가 모두 다른 수인지 확인
    let uniqueNumber = new Set(input);
    if (uniqueNumber.size === input.length) {
      return true;
    }
    return false;
  }
  gameStart() {
    const input = document.querySelector("#user-input");
    const submitBtn = document.querySelector("#submit");
    
    let computerRandomNumber = this.makeRandomNumbers();
    console.log(computerRandomNumber);
    submitBtn.addEventListener('click', () => {
      if (!this.checkUserInput(input.value)) {
        return alert("1~9사이의 서로 다른 세자리 숫자를 입력해주세요.");
      }
    })
  }
}
new BaseballGame();