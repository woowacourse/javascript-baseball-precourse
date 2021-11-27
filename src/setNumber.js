import BaseballGame from './index.js'

export function setNumber() { 
  const baseball = new BaseballGame()
  const userFrom = document.getElementById("user-form")
  const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('')
  userFrom.addEventListener('submit', (e) => {
    const userNumber = e.target[0].value;
    e.preventDefault()
    baseball.play(randomNumber, userNumber)
  })
}