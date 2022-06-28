//1. 랜덤한 숫자 생성
function generateRandomNumber() {
  const computerNumber = new Array();

  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computerNumber.indexOf(randomNumber) === -1) {
      computerNumber.push(randomNumber.toString());
    }
  }
  //console.log(computerNumber);
  return computerNumber;
}

let computerInputNumbers = generateRandomNumber();
console.log(computerInputNumbers);

//2. 입력한 숫자 확인
const playerInput = document.getElementById("user-input");
const button = document.getElementById("submit");

function isValid(input) {
  if (isNaN(input)) {
    console.log("숫자를 입력해주세요");
  } else {
    if (input.length !== 3) {
      console.log("세자리 숫자를 입력해주세요");
    } else {
      if (input.includes(0)) {
        console.log("1부터 9까지 숫자를 입력해 주세요");
      } else {
        const inputArray = [...new Set(input)];
        if (inputArray.length !== 3) {
          console.log("중복 없이 입력해 주세요");
        } else {
          return true;
        }
      }
    }
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValid(playerInput.value) === true) {
    const userInputNumbers = [...playerInput.value.toString()];
    compareNumber(computerInputNumbers, userInputNumbers);
    //console.log(userInputNumbers);
  }
});

//3. 입력한 숫자와 생성한 숫자 비교
function compareNumber(targetArray, comparisonArray) {
  //const targetArray = targetNumber.split("");
  //const comparisonArray = comparisonNumber.split("");
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (targetArray[i] === comparisonArray[i]) {
      strike++;
    } else if (targetArray.includes(comparisonArray[i])) {
      ball++;
    }
  }
  if (strike !== 0 || ball !== 0) {
    if (strike === 3) {
      console.log("정답!");
    } else {
      console.log(`${ball}볼 ${strike}스크라이크`);
    }
  } else {
    console.log("낫싱");
  }

  //console.log(targetArray);
  //console.log(comparisonArray);
  // console.log(strike);
  // console.log(ball);
}

//compareNumber("123", "567");
//compareNumber(computerInputNumbers, ["1", "2", "3"]);
