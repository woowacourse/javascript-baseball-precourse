import { inputErrorMessage } from './constant.js';


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
      showError(inputErrorMessage);
      console.log('1');
      return false;
    }
    if(input.length!==3){
      showError(inputErrorMessage);
      console.log('2');
      return false;
    }
    if(checkRepeat(input)){
        showError(inputErrorMessage);
        console.log('3');
      return false;
    }
    return true;
}

function getUserInput(){  
    const userInputNum=document.getElementById("user-input").value;
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

