export default function BaseballGame() {

  /* set ComputerInputNumbers */
  this.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min + 1) + min);
  };

  this.setAnswer = function() {
    let answer = "";
  
    while (answer.length < 3) {
      let num = String(this.getRandomInt(1, 9));
      
      if (answer.indexOf(num) > -1) {
        continue;
      } else {
        answer += num;
      }
    }

    return answer;
  };
  
  /* get UserInputNumbers */
  this.getUserInput = function() {
    return document.getElementById("user-input").value;
  };

  /* check UserInputNumbers */
  this.isValidNumber = function(userInputNumbers) {
    return (userInputNumbers.length === 3) && (/[1-9]{3}/.test(userInputNumbers));
  };

  this.isDuplicated = function(userInputNumbers) {
    const num = userInputNumbers.split("");
    const isDup = num.some(function(x) {
      return num.indexOf(x) !== num.lastIndexOf(x);
    });
  
    return isDup;
  };

  this.checkUserInput = function(userInputNumbers) {
    return (this.isValidNumber(userInputNumbers) && !this.isDuplicated(userInputNumbers));
  };

  this.alertInvalidInputMessage = function() {
    alert("잘못된 입력입니다.\n1-9사이의 세 자리 숫자를 중복없이 입력해 주세요.");
  };

  /* get the Result of Game */
  this.countStrikeAndBall = function(computerInputNumbers, userInputNumbers) {
    const computerNumberArray = computerInputNumbers.split("");
    const userNumberArray = userInputNumbers.split("");
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
  };

  this.getResult = function(strike, ball) {
    let retString = "";
  
    if (strike === 3) {
      retString = "승리했습니다. <button id='game-restart-button'>게임 재시작</button>";
    } else if (strike || ball) {
      retString = `${ball ? ball+"볼" : ""}${ball && strike ? " " : ""}${strike ? strike+"스트라이크" : ""}`
    } else {
      retString = "낫싱";
    }
  
    return retString;
  };

  this.play = function(computerInputNumbers, userInputNumbers) {
    const {strike, ball} = this.countStrikeAndBall(computerInputNumbers, userInputNumbers);
    return this.getResult(strike, ball);
  };

  /* show the Result of Game on Window */
  this.showResult = function(string) {
    document.getElementById("result").innerHTML = string;
  };

  /* restart the Game, init values. */
  this.restart = function() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("submit").value = "";
    document.getElementById("user-input").value = "";

    return this.setAnswer();
  };
}

window.open = function() {
  const baseballGame = new BaseballGame();
  let computerInputNumbers = baseballGame.setAnswer();

  document.addEventListener('click', function(event) {
    const id = event.target.id;
    if (id === "submit") {
      const userInputNumbers = baseballGame.getUserInput();
      if (baseballGame.checkUserInput(userInputNumbers) === true) {
        const result = baseballGame.play(computerInputNumbers, userInputNumbers);
        baseballGame.showResult(result);
      } else {
        baseballGame.alertInvalidInputMessage();
      }
    } else if (id === "game-restart-button") {
      computerInputNumbers = baseballGame.restart();
    }
  });
}

window.open();