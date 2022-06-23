//1. 랜덤한 숫자 생성
function generateRandomNumber() {
  const computerNumber = new Array();

  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computerNumber.indexOf(randomNumber) === -1) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber;
}

const computerInputNumbers = generateRandomNumber();
//console.log(computerInputNumbers);

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
        }
      }
    }
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  isValid(playerInput.value);
  //console.log(playerInput);
});
