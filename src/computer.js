//컴퓨터에서 난수생성
export default function generateComNumber(){
    let newnumbers=[]
    
    while(newnumbers.length!=3){
      let newnum=MissionUtils.Random.pickNumberInRange(1, 9);
      if (!newnumbers.includes(newnum)){
        newnumbers.push(newnum);
       }

      }
  return newnumbers;
  }