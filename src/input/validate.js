const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", onClick);
function onClick(event) {
  console.log(userInput.value);
  event.preventDefault();
}

export default function validate(userInputs) {
  console.log("검증", userInputs);

  return true;
}
