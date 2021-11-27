//strike,ball 카운트 
export default function getHint(computerInputNumbers, userInputNumbers){
  let strikeCount=0;
  let ballCount=0;
  userInputNumbers.forEach((num,index)=>{      
    if(num==computerInputNumbers[index]){
      strikeCount++;
    }
    else if(computerInputNumbers.includes(num)){
      ballCount++;
    }
  }
  )   
  return [strikeCount,ballCount];
  };