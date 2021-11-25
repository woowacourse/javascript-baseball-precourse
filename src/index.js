export default class BaseballGame {

    // 중복없이 랜덤한 3자리수 정답 생성
    makeRandomAnswer() {
        const randomAnswer = [];
        let usedNumbers = [];

        while(randomAnswer.length < 3) {
            const pickedNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!usedNumbers.includes(pickedNum)) {
                randomAnswer.push(pickedNum);
                usedNumbers.push(pickedNum);
            }
        }
        return randomAnswer;
    }

    play(ComputerInputNumbers, userInputNumbers) {      
        return "결과 값 String";
    }
}