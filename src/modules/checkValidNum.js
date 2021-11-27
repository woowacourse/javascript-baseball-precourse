export default function checkValidNum(userInputNum){
    //3미만의 길이의 값을 입력했을 때 
    if(userInputNum.length !== 3){
        return false 
    }
    //중복된 값을 입력했을 때  
    const setUserInput = new Set(userInputNum);
    if ([...setUserInput].length !== userInputNum.length){
        return false 
    }
    //1~9사이의 숫자를 입력하지 않았을 때 (=0을 입력했을 때), 알파벳을 입력했을 때 
    const numArray = [1,2,3,4,5,6,7,8,9];
    for(let i =0; i < userInputNum.length; i ++){
        if(!numArray.includes(Number(userInputNum[i])) ){
            return false;
        }
    }
    return true
}  