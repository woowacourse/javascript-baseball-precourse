export function getStrikeBallNum(){
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