export default class BaseballGame {
    constructor() {
      this.computerNumbers = this.genRandomNumbers();
    }

    // 랜덤한 3자리 숫자 생성 메서드
    genRandomNumbers() {
      let count = 0;
      let numbers = [];
      while(count < 3){
        const pickedNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(numbers.includes(pickedNumber)){
          continue;
        } else {
          numbers.push(pickedNumber);
          count++;
        }
      }

      return numbers;
    }

    // 유저 입력값 유효성 체크 메서드
    isValid(input){
      // 3자리 숫자(문자열) 인지
      if(input.length !== 3){
        return false;
      }
      
      let numberSlice = [];
      for(let i=0; i<3; i++){
        // 1~9 범위 안에 있는지 확인
        if(input.charCodeAt(i) > '9'.charCodeAt(0) || '1'.charCodeAt(0) > input.charCodeAt(i)){
          return false;
        }

        // 중복된 숫자인지 확인
        const pi = parseInt(input[i])
        if(numberSlice[pi]){
          return false;
        } else {
          numberSlice[pi] = 1;
        }
      }
      
      return true;
    }

    // 볼, 스트라이크 갯수 문자열화
    stringifyResult(ball, strike){
      let message = "";

      if(strike === 0 && ball === 0){
        message = "낫싱"
      } else {
        if(ball){
          message = `${ball}볼 `
        }
        if(strike){
          message += `${strike}스트라이크`
        }
      }

      return message;
    }

    // 스트라이크 확인
    countStrike(computerInputNumbers, userInputNumbers){
      let strike = 0;
      for(let i=0; i<3; i++){
        if(computerInputNumbers[i] === parseInt(userInputNumbers[i])){
          strike++;
        }
      }

      return strike;
    }

    // 같은 숫자(볼) 확인
    countSame(computerInputNumbers, userInputNumbers){
      let count = 0;
      for(let i=0; i<3; i++){
        if(computerInputNumbers.includes(parseInt(userInputNumbers[i]))){
          count++;
        }
      }
      
      return count;
    }

    // 유저 입력 값 & 생성된 값 비교 메서드
    play(computerInputNumbers, userInputNumbers){
      let strike, ball, message;

      strike = this.countStrike(computerInputNumbers, userInputNumbers);
      ball = this.countSame(computerInputNumbers, userInputNumbers) - strike;
      
      if(strike === 3){
        message = "성공";
      }else{
        message = this.stringifyResult(ball, strike);
      }
      return message;
    }

    receiveInput(input){
      const message = this.play(this.computerNumbers, input);
      return message;
    }

    restart(){
      this.computerNumbers = this.genRandomNumbers();
    }
}