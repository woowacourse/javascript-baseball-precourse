//유효성 검사(타입검사)
function checkValidType(userInputArray) {
    if(userInputArray.every(isNumber)) {
        return true;
    }
    return false;
}

//유효성 검사 1부터 9사이 숫자인지
function checkValidNumber(userInputArray) {
    if(userInputArray.every((x) => 1 <= x && x <= 9)) {
        return true;
    }
    return false;
}

//유효성 검사 중복이 있는지
function checkValidDuplicate(userInputArray) {
    if(userInputArray[0] !== userInputArray[1] && userInputArray[0] !== userInputArray[2] && userInputArray[1] !== userInputArray[2]) {
        return true;
    }
    return false;
}

//유효성 검사 길이가 3인지
function checkValidLength(userInputArray) {
    if(userInputArray.length === 3) {
        return true;
    }
    return false;
}

//유효성 검사 숫자인지(한글자)
function isNumber(letter) {
    if(isNaN(letter)) {
        return false;
    }
    return true;
}

//유저입력값 유효성 검사
function checkValid(userInputArray) {
    //const NumberUserInput = Number($userInput.value)
    if(!checkValidType(userInputArray)) {
        alert('잘못된 입력입니다! 숫자만 입력 가능합니다!');
        return false;
    }
    else if(!checkValidLength(userInputArray)) {
        alert('잘못된 입력입니다! 숫자는 3개를 입력해야합니다!');
        return false;
    }
    else if(!checkValidDuplicate(userInputArray)) {
        alert('잘못된 입력입니다! 중복된 숫자는 입력할 수 없습니다!');
        return false;
    }
    else if(!checkValidNumber(userInputArray)) {
        alert('잘못된 입력입니다! 1부터 9까지 숫자만 가능합니다!');
        return false;
    }
    return true;
}

//유저입력값 가져오기
export default function getUserInput() {
    const $userInput = document.querySelector('#user-input');

    //유저입력값을 배열에 저장
    const userInputArray = $userInput.value.split('').map((x) => Number(x));

    //유저입력값 유효성 검사
    if(checkValid(userInputArray)) {
        return userInputArray;
    }
    else{
        return false;
    }
}