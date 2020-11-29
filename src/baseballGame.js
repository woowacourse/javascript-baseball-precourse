export default class BaseballGame {

    //스트라이크 갯수를 체크합니다.
    checkStrike(computerNumArr,userInputNumArr){
    
        let strike = 0;

        computerNumArr.forEach((element,index)=>{
            if(element === userInputNumArr[index]){
                strike++;
            }
        });

        return strike;
    }

    // 볼 갯수를 체크합니다. 
    checkBall(computerNumArr,userInputNumArr){
        const userInputSet = new Set(userInputNumArr);
        let ball = 0;

        computerNumArr.forEach((element,index)=>{
            if(element === userInputNumArr[index]){
                return;
            }
            if(userInputSet.has(element)){
                ball++;
            }
        });

        return ball;
    }

    // 사용자가 예측한 숫자에 대한 평가를 수행합니다. 
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
            return_str="정답";
        }else if(ball && !strike){
            return_str= `${ball}볼`;
        }else if(strike && !ball){
            return_str= `${strike}스트라이크`
        }else if(ball && strike){
            return_str= `${ball}볼 ${strike}스트라이크`;
        }else{
            return_str = "낫싱";
        }
        return return_str;
    }
    
    // 컴퓨터가 랜덤으로 숫자를 선택
    initComputerNum(){

        const arr = [1,2,3,4,5,6,7,8,9];
        let num = "";

        for(let i=0; i<3; i++){
            let ran = Math.floor(Math.random()*10)%arr.length;
            num+= arr[ran];
            arr.splice(ran,1);
        }
        this.computerNum = num*1;
        console.log(num);
    }

    //입력이 0이 아닌 1~9의 숫자들로만 구성되어있는지 확인
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
  
    //올바른 입력인지 모든 조건을 판단
    isAlright(input){
        
        const inputSet = new Set([...input]);
        let retValue = false;

        //숫자인지, 중복이 존재하는지, 숫자길이가 3인지
        if(this.isNum(input) && inputSet.size === 3 && String(input).length === 3){
            retValue = true
        }

        return retValue;
    }

    //임시로 컴퓨터의 숫자를 정함
    constructor(){
        
        this.computerNum;
        this.initComputerNum();
    }
  }