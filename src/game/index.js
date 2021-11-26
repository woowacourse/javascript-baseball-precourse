export default class BaseballGame {
    constructor() {
      this.computerNumbers = this.genRandomNumbers();
    }

    // 랜덤한 3자리 숫자 생성 메서드
    genRandomNumbers() {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3); 
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
}