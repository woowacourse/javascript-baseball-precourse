export default function InitGame() {
  const _candidate = OneToNine();

	this.GenerateAnswer = function (input) {
    const answer = PickRandomDigits(_candidate);
    InitGameWindow();

    return answer;
  }

  const GenerateAnswerBind = this.GenerateAnswer.bind();

  const OneToNine = () => {
    let candidate = [];

	  for (let i = 1; i <= 9; i++)
      candidate.push(i);
      
    return candidate;
  }

  const PickRandomDigits = () => {
    const answer = [];
    
    for (let i = 0; i <= 2; i++) {
		  let picked = _candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		  answer.push(picked);
    }

    return answer;
  }

  this.RestartGame = function (resultArea, answer, input) {
    resultArea.innerHTML = '';
    answer = GenerateAnswerBind(input);
    input.value = '';
    input.placeholder = '';

    return answer;
  }
}