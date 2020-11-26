import { BaseballGame } from './modules';
import { text } from './fixtrue';
const game = new BaseballGame();

function getDeduplicateCount(userInputNumbers) {
  return Array.from(new Set(userInputNumbers)).length;
}

function numIsSubmited(e) {
  const userInputNumbers = document.getElementById('user-input').value;
  const deduplicateCount = getDeduplicateCount(userInputNumbers);

  if (userInputNumbers.length !== 3) {
    game.resetInputNumbers();
    return alert(text.warningfor3digit);
  }

  if (userInputNumbers.includes('0')) {
    game.resetInputNumbers();
    return alert(text.warningforZero);
  }

  if (deduplicateCount !== 3) {
    game.resetInputNumbers();
    return alert(text.waringforduplicate);
  }

  game.cleanResult();
  const responseString = game.play(game.computerInputNumbers, userInputNumbers);
  game.renderResult(responseString);
}
const submitNumButton = document.getElementById('submit');
submitNumButton.addEventListener('click', numIsSubmited);
