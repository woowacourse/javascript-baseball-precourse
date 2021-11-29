//컴퓨터에서 난수생성
export default function generateComNumber(){
    let newNumbers=[];
    while(newNumbers.length!=3){
      let newNum=MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newNumbers.includes(newNum)){
        newNumbers.push(newNum);
       }
      };
  return newNumbers;
  };