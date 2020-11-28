export default class BaseballGame {
    play(userInputNumbers) {
      return "결과 값 String";
    }

    initComputerNum(){
        let num = "";
        const arr = [1,2,3,4,5,6,7,8,9];
        for(let i=0; i<3; i++){
            let ran = Math.floor(Math.random()*10)%arr.length;
            num+= arr[ran];
            arr.splice(ran,1);
        }
        this.computerNum = num*1;
        console.log(num);
    }
  
    isAlright(input){
      const inputSet = new Set();
      let retValue = false;
    
      [...input].forEach(element => {
        inputSet.add(element);
      });
      //숫자인지, 중복이 존재하는지, 숫자길이가 3인지
      if(!isNaN(input*1) && inputSet.size === 3 && String(input).length === 3){
        retValue = true
      }
      return retValue;
    }

    constructor(){
        //임시로 컴퓨터의 숫자를 정함
        this.computerNum;
        this.initComputerNum();
    }
  }