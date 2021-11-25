export default function BaseballGame() {
    const $form = document.querySelector('form');
    const $input = document.querySelector('#user-input');
    let computerInputNumbers = [];
    let StrikeCnt = 0;
    let BallCnt = 0;

    const setAnswer = () => {
        let generateRandNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
        return generateRandNumbers;
    };
    computerInputNumbers = setAnswer();
    console.log(computerInputNumbers);

    // checkout Input
    const checkInput = userInputNumbers => {
        if (userInputNumbers.length !== 3) {
            return alert('3자리 숫자를 입력하세요');
        }
        if (userInputNumbers[0] == 0 || userInputNumbers[1] == 0 || userInputNumbers[2] == 0) {
            return alert('0이 아닌 숫자를 입력하세요');
        }
        if (isNaN(userInputNumbers)) {
            return alert('숫자를 입력하세요');
        }
        if (new Set(userInputNumbers).size !== 3) {
            return alert('중복되지 않은 값을 입력하세요.\n 예) 123(o), 122(x)')
        }
        return true;
    };
    // checkScore
    const CountStrikeAndBall = userInputNumbers => {
        StrikeCnt = 0;
        BallCnt = 0;
        for (let i = 0; i < userInputNumbers.length; i++) {
            if (userInputNumbers[i] == computerInputNumbers[i]) StrikeCnt++;
            else if (userInputNumbers[i] == computerInputNumbers[(i + 1) % 3] || userInputNumbers[i] == computerInputNumbers[(i + 2) % 3]) BallCnt++;
        }
        //console.log(`${StrikeCnt}스트라이크, ${BallCnt}볼`);
        return [StrikeCnt, BallCnt];
    }

    $form.addEventListener('submit', (event) => {
        event.preventDefault(); // 제출 시 초기화 되는 것 방지
        const userInputNumbers = $input.value;
        //console.log(userInputNumbers);
        //checkInput(userInputNumbers);
        if (!checkInput(userInputNumbers)) return;
        else {
            console.log(userInputNumbers);
            console.log(CountStrikeAndBall(userInputNumbers));
        }
    });

}

BaseballGame();
