export default function InitGame() {
	this.GenerateAnswer = function (resultArea, input) {
    const candidate = OneToNine();
    const answer = PickRandomDigits(candidate);
    InitGameWindow(resultArea, input);

    console.log(answer);
    return answer;
  }

  const GenerateAnswerBind = this.GenerateAnswer.bind();

  function OneToNine() {
    let candidate = [];

	  for (let i = 1; i <= 9; i++)
      candidate.push(i);
      
    return candidate;
  }

  const PickRandomDigits = (candidate) => {
    const answer = [];
    
    for (let i = 0; i <= 2; i++) {
		  let picked = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		  answer.push(picked);
    }

    return answer;
  }

  const InitGameWindow = (resultArea, input) => {
    resultArea.textContent = '';
    input.value = '';
    input.placeholder = '';
    input.focus();
  }

  this.RestartGame = function (resultArea, answer, input) {
    resultArea.innerHTML = '';
    answer = GenerateAnswerBind(resultArea, input);
    input.value = '';
    input.placeholder = '';

    return answer;
  }
}