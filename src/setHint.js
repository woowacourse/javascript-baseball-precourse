export default function setHint(result, resultArea) {
  // set hint message
  if (result && result !== "3스트라이크") resultArea.textContent = `${result}`;
  else resultArea.textContent = "";
}
