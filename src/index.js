import { BaseballGame } from "./modules"

const game = new BaseballGame();



function numIsSubmited(e) {
  const num = document.getElementById("user-input").value


}



const submitNumButton = document.getElementById("submit")
submitNumButton.addEventListener("click", numIsSubmited)