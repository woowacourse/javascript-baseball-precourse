import { INPUT_ERROR_MESSAGE, GAME_WIN_MESSAGE } from './constant.js';

const computerInputNumbers=getComputerNumber();

function getStrikeBallNum(){
    let strikeCount=0;
    let ballCount=0;

    const userNumberArr= getUserInput().split('').map(Number);
    ballCount=userNumberArr.filter(it=>computerInputNumbers.includes(it)).length;
    
    for(let i=0;i<3;i++){
        if(userInputNumbers[i]==computerInputNumbers[i]) strikeCount++;
    }
    ballCount=ballCount-strikeCount;

    return [ballCount,strikeCount];
}

function showError(message){
    alert(message);
}

function checkRepeat(input){
    const inputArr=input.split('').map(Number);
    const inputSet=new Set(input);
    if(inputArr.length!==inputSet.size) return true;
}

function checkinputValid(input){
    if(isNaN(input)){
      showError(INPUT_ERROR_MESSAGE);
      console.log('1');
      return false;
    }
    if(input.length!==3){
      showError(INPUT_ERROR_MESSAGE);
      console.log('2');
      return false;
    }
    if(checkRepeat(input)){
        showError(INPUT_ERROR_MESSAGE);
        console.log('3');
      return false;
    }
    return true;
}


function getUserInput(){  
    let userInputNum=document.getElementById("user-input").value;
    if(!checkinputValid(userInputNum)){
        console.log("새창");
    }
    return userInputNum;
}
  

function getComputerNumber(){
    const randomNumArr =[];
  
    while(randomNumArr.length<3){
      const randomNum =MissionUtils.Random.pickNumberInRange(1,9);
  
      if(randomNumArr.includes(randomNum)) continue;
  
      randomNumArr.push(randomNum);
    }   
    return randomNumArr;
}

