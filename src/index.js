import { BaseballGame } from "./modules"

const game = new BaseballGame();

function numIsSubmited(e) {
  try {
    game.cleanResult()
    const userInputNumbers = document.getElementById("user-input").value
    const responseString = game.play(game.computerInputNumbers, userInputNumbers)
    game.renderResult(responseString)
  } catch (error) {
    alert(error)
  }

}
const submitNumButton = document.getElementById("submit")
submitNumButton.addEventListener("click", numIsSubmited)
