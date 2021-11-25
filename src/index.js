export default class BaseballGame {

    // 중복없이 랜덤한 3자리수 정답 생성
    makeRandomAnswer() {
        const MIN = 1;
        const MAX = 9;
        const randomAnswer = [];
        let temp = [];

        temp = MissionUtils.Random.pickUniqueNumbersInRange(MIN, MAX, 3); 
        for(let i = 0; i < 3; i++) {
            randomAnswer.push(temp[i]);
        }
        return randomAnswer;
    }

    play(ComputerInputNumbers, userInputNumbers) {      
        return "결과 값 String";
    }
}