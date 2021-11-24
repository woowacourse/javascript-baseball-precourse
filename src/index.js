export default function BaseballGame() {
    const $form = document.querySelector('form');
    const $input = document.querySelector('#user-input');
    let computerInputNumbers = [];

    const setAnswer = () => {
        let generateRandNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
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

    $form.addEventListener('submit', (event) => {
        event.preventDefault(); // 제출 시 초기화 되는 것 방지
        const userInputNumbers = $input.value;
        console.log(userInputNumbers);
        checkInput(userInputNumbers);
    });

}

BaseballGame();
