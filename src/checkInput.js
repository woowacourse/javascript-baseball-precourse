export const checkInput = userInputNumbers => {
    if (userInputNumbers.length !== 3) {
        return alert('3자리 숫자를 입력하세요');
    };
    if (userInputNumbers[0] == 0 || userInputNumbers[1] == 0 || userInputNumbers[2] == 0) {
        return alert('0이 아닌 숫자를 입력하세요');
    };
    if (isNaN(userInputNumbers)) {
        return alert('숫자를 입력하세요');
    };
    if (new Set(userInputNumbers).size !== 3) {
        return alert('중복되지 않은 값을 입력하세요.\n 예) 123(o), 122(x)');
    };
    return true;
};