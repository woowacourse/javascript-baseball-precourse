export default class BaseballGame {
    constructor() {
      this.computerNumbers = this.genRandomNumbers();
    }

    // 랜덤한 3자리 숫자 생성 메서드
    genRandomNumbers() {
      let count = 0;
      let numbers = [];
      let numPool = new Array(10);
      while(count < 3){
        const pickedNumber = MissionUtils.Random.pickNumberInRange(1,9);
        if(numPool[pickedNumber] === true){
          continue;
        } else {
          numbers.push(pickedNumber);
          numPool[pickedNumber] = true;
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

    // 유저 입력 값 & 생성된 값 비교 메서드
    compareInput(input){
      let strike = 0;
      let ball = 0;
      let isNothing = true;
      let isFinished = false;
      let output = [];

      let userPool = new Array(10);
      let computerPool = new Array(10);

      // 스트라이크 확인
      for(let i=0; i<3; i++){
        console.log(input[i], this.computerNumbers[i]);
        if(this.computerNumbers[i] === parseInt(input[i])){
          strike++;
        } else {
          userPool[input[i]] = true;
          computerPool[this.computerNumbers[i]] = true;
        }
      }

      // 볼 확인
      for(let i=1; i<10; i++){
        if(userPool[i] === true && computerPool[i] === true){
          ball++;
        }
      }

      // 낫씽 확인
      if(strike > 0 || ball > 0){
        isNothing = false;
      }

      // 전달 값 정리
      if(strike === 3){
        isFinished = true
      } else {
        output = [isNothing, strike, ball];
      }

      return {isFinished, output};
    }

    restart(){
      this.computerNumbers = this.genRandomNumbers();
    }
}