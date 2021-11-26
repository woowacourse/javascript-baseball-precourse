// on submit button click function
export default function handleInputSubmit() {
  // get user input value
  let input = document.querySelector("#user-input");
  let inputValue = input.value;

  // validate input and alert if not valid
  if (!validateInput(inputValue)) {
    alert("입력 값의 형식이 올바르지 않습니다.\n다시 입력해주세요.");
    input.value = "";
  }
}

// input validation function
function validateInput(value) {
  // screen for duplicate and value length
  const valueSet = new Set(value.split(""));
  if (valueSet.size !== 3 || value.length !== 3) return false;

  // check if each digit is between 1 and 9
  for (let n of valueSet) {
    let integer = n * 1;
    if (!Number.isInteger(integer) || integer < 1 || integer > 9) return false;
  }

  return true;
}
