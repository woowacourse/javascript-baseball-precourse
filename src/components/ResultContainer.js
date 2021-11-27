import RestartContainer from "./RestartContainer.js";

const ResultContainer = ({
  isGameClear = false,
  resultText,
  onClickRestartCallback,
}) => {
  const resultContainer = document.querySelector("#result");

  return isGameClear
    ? RestartContainer({ resultContainer, onClickRestartCallback })
    : (resultContainer.innerHTML = resultText);
};

export default ResultContainer;
