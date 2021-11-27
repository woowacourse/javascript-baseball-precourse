import BaseballGame from './index.js'

export function setNumber() { 
  const baseball = new BaseballGame()
  const userFrom = document.getElementById("user-form")
  const randomNumber = setRandonNumber()
  userFrom.addEventListener('submit', (e) => {
    const userNumber = e.target[0].value;
    e.preventDefault()
    baseball.play(randomNumber, userNumber)
  })
}

function setRandonNumber() {
  const randomNumberSet = new Set();
  while (randomNumberSet.size !== 3) {
    randomNumberSet.add(MissionUtils.Random.pickNumberInRange(1, 9))
  }

  return [...randomNumberSet].join('');
}