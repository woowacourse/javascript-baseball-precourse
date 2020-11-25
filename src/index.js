import { BaseballGame } from './modules';

const game = new BaseballGame();

function getDeduplicateCount(userInputNumbers) {
  return Array.from(new Set(userInputNumbers)).length;
}

function numIsSubmited(e) {
  try {
    const userInputNumbers = document.getElementById('user-input').value;
    const deduplicateCount = getDeduplicateCount(userInputNumbers);

    if (userInputNumbers.length !== 3) {
      game.resetInputNumbers();
      throw '3자리 수를 입력해주세요!';
    }

    if (userInputNumbers.indexOf('0') !== -1) {
      game.resetInputNumbers();
      throw '0을 포함하지 않는 숫자를 입력해주세요!';
    }

    if (deduplicateCount !== 3) {
      game.resetInputNumbers();
      throw '각 자리의 수가 중복되지 않는 수를 입력해주세요!';
    }

    game.cleanResult();
    const responseString = game.play(
      game.computerInputNumbers,
      userInputNumbers,
    );
    game.renderResult(responseString);
  } catch (error) {
    alert(error);
  }
}
const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener('click', numIsSubmited);
