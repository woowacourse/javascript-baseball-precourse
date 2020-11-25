export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = this.getRandom()
  }

  getRandom() {
    const minVal = 1
    const maxVal = 9
    let random = ''

    for (let i = 0; i < 3; i++) {
      random += Math.floor((Math.random() * (maxVal - minVal + 1)) + minVal)
    }

    return random
  }

  judge(computerInputNumbers, userInputNumbers) {
    let strike = 0
    let ball = 0
    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++
      } else if (computerInputNumbers.indexOf(userInputNumbers[i]) !== -1) {
        ball++
      }
    }
    return [strike, ball]
  }

  play(computerInputNumbers, userInputNumbers) {
    try {
      const [strike, ball] = this.judge(computerInputNumbers, userInputNumbers)
      let responseString = ''

      if (ball) {
        responseString += `${ball}볼`
      }

      if (strike) {
        responseString += ` ${strike}스트라이크`
      }

      if (ball === 0 && strike === 0) {
        responseString = '낫싱'
      }

      if (strike === 3) {
        responseString = '🎉정답을 맞추셨습니다!🎉'
      }

      return responseString;
    } catch (error) {
      console.log(error)
    }
  }
  renderString(string) {
    const result_div = document.getElementById('result')
    const response_p = document.createElement('p')
    response_p.innerHTML = string
    result_div.appendChild(response_p)

    if (string === '🎉정답을 맞추셨습니다!🎉') {
      const replay_div = document.createElement('div')
      replay_div.id = 'replay'

      let replay_p = document.createElement('p')
      replay_p.innerHTML = '게임을 새로 시작하시겠습니까?'
      replay_div.appendChild(replay_p)

      const replay_button = document.createElement('button')
      replay_button.innerHTML = '게임 재시작'
      replay_button.id = 'replay-button'
      replay_div.appendChild(replay_button)

      result_div.appendChild(replay_div)
    }


  }
}