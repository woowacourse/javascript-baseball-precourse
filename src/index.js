function getComputerNumber(){
    const randomNumArr =[];
  
    while(randomNumArr.length<3){
      const randomNum =MissionUtils.Random.pickNumberInRange(1,9);
  
      if(randomNumArr.includes(randomNum)) continue;
  
      randomNumArr.push(randomNum);
    }   
    return randomNumArr;
}
  