import { BaseballGame } from './modules';
import { text } from './fixtrue';
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
      throw text.warningfor3digit;
    }

    if (userInputNumbers.indexOf('0') !== -1) {
      game.resetInputNumbers();
      throw text.warningforZero;
    }

    if (deduplicateCount !== 3) {
      game.resetInputNumbers();
      throw text.waringforduplicate;
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
