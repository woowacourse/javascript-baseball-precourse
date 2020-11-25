import { BaseballGame } from "./modules"

const game = new BaseballGame();

console.log(game.computerInputNumbers)


function numIsSubmited(e) {
  const userInputNumbers = document.getElementById("user-input").value
  const responseString = game.play(game.computerInputNumbers, userInputNumbers)
  game.renderString(responseString)

}




const submitNumButton = document.getElementById("submit")
submitNumButton.addEventListener("click", numIsSubmited)
