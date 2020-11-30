export default function BaseballGame() {
  const $userInput = document.querySelector("#user-input");
  const $submitBtn = document.querySelector("#submit");

  const hasSameNumber = (numberArray) => {
    const sameIndex = numberArray.filter(
      (value, index) => value === numberArray[index + 1]
    );
    return sameIndex.length !== 0;
  };

  const isValidNumber = (numberArray) => {
    if (hasSameNumber(numberArray)) {
      alert("서로 다른 숫자를 입력해주세요");
      return true;
    }

    if (numberArray.indexOf("0") !== -1) {
      alert("1부터 9까지의 숫자 중에서 입력해주세요");
      return true;
    }

    if (numberArray.length !== 3) {
      alert("숫자 3개를 입력해주세요");
      return true;
    }

    return false;
  };

  const handleUserInputSubmit = (e) => {
    e.preventDefault();
    let userInputNumbers = null;

    const currentInputNumber = $userInput.value.split("");
    if (!isValidNumber(currentInputNumber)) {
      userInputNumbers = currentInputNumber;
    }
    console.log(userInputNumbers);
    $userInput.value = "";
  };

  $submitBtn.addEventListener("click", handleUserInputSubmit);

  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
}

new BaseballGame();
