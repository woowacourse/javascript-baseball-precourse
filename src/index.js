export default function BaseballGame() {
    const $form = document.querySelector('form');
    const $input = document.querySelector('#user-input');
    const $result = document.querySelector('#result');
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
        let Strike = StrikeCnt;
        let Ball = BallCnt;
        return {
            Strike: Strike,
            Ball: Ball
        };
    }
    // Hint 제공
    const Hint = Strike_Ball => {
        if (Strike_Ball.Strike === 3) {
            endGame();
        }
        else if (Strike_Ball.Strike === 0 && Strike_Ball.Ball === 0) {
            $result.innerText = '낫싱';
        }
        else {
            if (Strike_Ball.Strike === 0) $result.innerText = `${Strike_Ball.Ball}볼`;
            else if (Strike_Ball.Ball === 0) $result.innerText = `${Strike_Ball.Strike}스트라이크`;
            else $result.innerText = `${Strike_Ball.Ball}볼 ${Strike_Ball.Strike}스트라이크`;
        }
    }

    //endGame, resetGame
    const endGame = () => {
        $result.innerHTML = '<Strong> 정답을 맞추셨습니다 <Strong /> <br/>';
        $result.innerHTML += `게임을 새로 시작하시겠습니까?`
        $result.innerHTML += `<button id="game-restart-button" onclick="resetGame_button();">재시작</button>`
    }

    $form.addEventListener('submit', (event) => {
        event.preventDefault(); // 제출 시 초기화 되는 것 방지
        const userInputNumbers = $input.value;
        //console.log(userInputNumbers);
        //checkInput(userInputNumbers);
        if (!checkInput(userInputNumbers)) return;
        else {
            console.log(userInputNumbers);
            //console.log(CountStrikeAndBall(userInputNumbers));
            let Strike_Ball = CountStrikeAndBall(userInputNumbers);
            console.log(`${Strike_Ball.Strike}스트라이크, ${Strike_Ball.Ball}볼`);
            Hint(Strike_Ball);
        }
    });

}

BaseballGame();
