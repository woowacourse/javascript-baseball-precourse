export function createRandomNums() {
  let randomNumbers = "";
  let i = 0;

  while (i < 3) {
    //이미 포함된 숫자가 아닌 다른 수가 나올때 까지 난수를 생성
    const num = String(Math.floor(Math.random() * 10));
    if (!randomNumbers.includes(num)) {
      randomNumbers += num;
      i += 1;
    }
  }

  return randomNumbers;
}

export function validateInput(userInputNumbers) {
  const nonDuplicateNumbers = Array.from(new Set(userInputNumbers));
  // 숫자가 아닐때, 글자수가 3이 아닐때,중복된 숫자로 전체 길이가 3이 안될때 걸러냄
  if (
    !Number(userInputNumbers) ||
    userInputNumbers.length !== 3 ||
    nonDuplicateNumbers.length !== 3
  ) {
    alert("숫자를 올바르게 입력하세요.[세 자리의 다른수 ex.127]");

    return false;
  }

  return true;
}

export default function BaseballGame() {
  const submitButton = document.querySelector("#submit");
  this.computerNumbers = createRandomNums();
  console.log(this.computerNumbers);
  this.balls = 0;
  this.strikes = 0;
  this.compareNumber = function (
    computerNumber,
    userNumber,
    computerIndex,
    userIndex
  ) {
    if (computerNumber === userNumber) {
      if (computerIndex === userIndex) {
        this.strikes += 1;
      } else {
        this.balls += 1;
      }
    }
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    for (const [i, computerNumber] of computerInputNumbers
      .split("")
      .entries()) {
      for (const [j, userNumber] of userInputNumbers.split("").entries()) {
        this.compareNumber(computerNumber, userNumber, i, j);
      }
    }
    console.log(this.balls, this.strikes);

    return "결과 값 String";
  };

  submitButton.addEventListener("click", () => {
    const userInput = document.querySelector("#user-input");
    this.balls = 0;
    this.strikes = 0;
    userInput.focus();

    if (validateInput(userInput.value)) {
      const gameResult = this.play(this.computerNumbers, userInput.value);
    } else {
      userInput.value = "";
      userInput.focus();
    }
  });
}

new BaseballGame();
