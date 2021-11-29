const setHint = function setHintTextContentOnHtml(result, resultArea) {
  // set hint message
  if (result && result !== "3스트라이크") resultArea.textContent = `${result}`;
  else resultArea.textContent = "";
};

export default setHint;
