export default class BaseballGame {

    checkStrike(computerNumArr,userInputNumArr){
        let strike = 0;
        computerNumArr.forEach((element,index)=>{
            if(element === userInputNumArr[index]){
                strike++;
            }
        });
        return strike;
    }

    checkBall(computerNumArr,userInputNumArr){
        let ball = 0;
        const userInputSet = new Set(userInputNumArr);
        computerNumArr.forEach((element,index)=>{
            if(element === userInputNumArr[index]){
                return;
            }
            if(userInputSet.has(element)){
                ball++;
            }
        })
        return ball;
    }

    play(computerInputNumbers, userInputNumbers) {
        const computerNumArr = [...String(computerInputNumbers)];
        const userInputNumArr = [...String(userInputNumbers)];
        let strike = 0;
        let ball = 0;
        let return_str = "";
        //스트라이크
        strike += this.checkStrike(computerNumArr,userInputNumArr);
        //볼
        ball += this.checkBall(computerNumArr,userInputNumArr);
        //리턴 메세지 구성
        if(strike === 3){
            return_str = `
            <p>🎉정답을 맞추셨습니다!🎉</p>
            <p>게임을 새로 시작하시겠습니까? <button onclick="window.location.reload()">게임 재시작</button></p> 
            `
        }else if(ball && !strike){
            return_str= `${ball}볼`;
        }else if(strike && !ball){
            return_str= `${strike}스트라이크`
        }else if(ball && strike){
            return_str= `${ball}볼 ${strike}스트라이크`;
        }else{
            return_str = "낫싱";
        }
        console.log(return_str);
        return return_str;
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
    isNum(input){
        const arr = [...input];
        let ret = true;
        //숫자인지 확인
        if(isNaN(input*1)){
            return false;
        }
        
        //숫자중 0이 포함되어있는지 확인
        arr.forEach(element =>{
            if(element === "0"){
                ret = false;
            }
        });
        return ret;
    }
  
    isAlright(input){
      const inputSet = new Set([...input]);
      let retValue = false;
      //숫자인지, 중복이 존재하는지, 숫자길이가 3인지
      if(this.isNum(input) && inputSet.size === 3 && String(input).length === 3){
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