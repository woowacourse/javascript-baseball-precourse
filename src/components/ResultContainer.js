import RestartContainer from "./RestartContainer.js";

const ResultContainer = ({
  isGameClear = false,
  resultText,
  onClickGameRestartCallback,
}) => {
  const resultContainer = document.querySelector("#result");

  return isGameClear
    ? RestartContainer({ resultContainer, onClickGameRestartCallback })
    : (resultContainer.innerHTML = resultText);
};

export default ResultContainer;
