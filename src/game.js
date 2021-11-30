import { GAME_WIN_MESSAGE } from './constant.js';
import { checkinputValid } from './check.js';

export function getGameWin(){
    let result='';
    result += GAME_WIN_MESSAGE;
    return result;
}

export function makeResult(ballCount,strikeCount){

    let resultMessage='';
    if(strikeCount===3){      
        return getGameWin();      
    }
    if(ballCount){
        resultMessage +=`${ballCount}볼 `;
    }
    if(strikeCount){
        resultMessage +=`${strikeCount}스트라이크`;
    }
    if(!ballCount&&!strikeCount){
        resultMessage='낫싱';
    }

    return resultMessage;
}

export function getStrikeBallNum(computerInputNumbers,userInputNumbers){
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

export function getComputerNumber(){
    const randomNumArr =[];
  
    while(randomNumArr.length<3){
      const randomNum =MissionUtils.Random.pickNumberInRange(1,9);
  
      if(randomNumArr.includes(randomNum)) continue;
  
      randomNumArr.push(randomNum);
    }   
    return randomNumArr;
}

export function getUserInput(){  
    let userInputNum=document.getElementById("user-input").value;
    if(!checkinputValid(userInputNum)){
        console.log("새창");
    }
    return userInputNum;
}