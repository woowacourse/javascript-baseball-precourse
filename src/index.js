export default function BaseballGame() {

  this.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
  }

  this.setAnswer = function() {
    let answer = [];
  
    while (answer.length < 3) {
      let num = this.getRandomInt(1, 9);
      
      if (answer.indexOf(num) > -1) {
        continue;
      } else {
        answer.push(num);
      }
    }
    
    return answer;
  }
  
  this.isValidNumber = function(userInputNumbers) {
    return /[1-9]{3}/.test(userInputNumbers);
  }

  this.isDuplicated = function(userInputNumbers) {
    const num = userInputNumbers.split("");
    const isDup = num.some(function(x) {
      return num.indexOf(x) !== num.lastIndexOf(x);
    });
  
    return isDup;
  }

  this.checkUserInput = function(userInputNumbers) {
    return (this.isValidNumber(userInputNumbers) && !this.isDuplicated(userInputNumbers));
  }

  this.countStrikeAndBall = function(computerInputNumbers, userInputNumbers) {
    const computerNumberArray = String(computerInputNumbers).split("");
    const userNumberArray = String(userInputNumbers).split("");
    let strike = 0;
    let ball = 0;
  
    userNumberArray.forEach(x => {
      if (computerNumberArray.indexOf(x) > -1) {
        if (computerNumberArray.indexOf(x) === userNumberArray.indexOf(x)) {
          strike += 1;
        } else {
          ball += 1;
        }
      }
    })
  
    return {strike, ball}
  }

  this.getResult = function(strike, ball) {
    let retString = "";
  
    if (strike === 3) {
      retString = "승리했습니다.";
    } else if (strike || ball) {
      retString = `${ball ? ball+"볼" : ""}${ball && strike ? " " : ""}${strike ? strike+"스트라이크" : ""}`
    } else {
      retString = "낫싱";
    }
  
    return retString;
  }

  this.getUserInput = function() {
    return document.getElementById("user-input").value;
  }

  this.showResult = function(string) {
    document.getElementById("result").innerText = string;
  }

  this.alertInvalidInputMessage = function() {
    alert("잘못된 입력입니다.\n1-9사이의 세 자리 숫자를 중복없이 입력해 주세요.");
  }

  this.play = function(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
