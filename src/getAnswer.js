//정답값 구하기
export default function getAnswer(){
    let i = 0;
    let answerArray = [];

    while(answerArray.length <3){    
    const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);
      if(!answerArray.includes(randomNumber)){
        answerArray[i] = randomNumber;
        i++;
    }
  }
  
  return answerArray;
}