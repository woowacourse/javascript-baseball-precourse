export default function resetView() {
  const $resultDiv = document.getElementById("result");
  const $userInput = document.getElementById("user-input");
  $resultDiv.innerHTML = "";
  $userInput.value = "";
}
