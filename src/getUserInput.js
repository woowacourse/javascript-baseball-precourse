//유저입력값 가져오기
export default function getUserInput(){
    const $userInput = document.querySelector('#user-input');
    console.log($userInput.value);

    //유저입력값을 배열에 저장
    const userInputArray = $userInput.value.split('').map((x) => Number(x));
    
    return userInputArray
}