//Error Message
export const $lengthError = '세자릿수를 입력해주세요';
export const $negativeNumberError = '양의 정수를 입력해주세요';
export const $inputRangeError = '1 ~ 9 범위의 수 세자리를 입력해주세요';
export const $overlapError = '중복되지 않는 자릿수를 입력해주세요';

//DOM Element Object
export const $checkButton = document.getElementById('submit');
export const $inputElement = document.getElementById('user-input');
export const $resultElement = document.getElementById('result');

//DOM Element String
export const answerDocument = `
    <div>🎉<strong>정답을 맞추셨습니다</strong>🎉</div>
    <p>게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button></p>
`;