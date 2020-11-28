export default function InitGame() {
	this.GenerateAnswer = function (input) {
    input.focus();
	  let answer = [];
	  let candidate = [];

	  for (let i = 1; i <= 9; i++)
		candidate.push(i);

	  for (let i = 0; i <= 2; i++) {
		  let picked = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		  answer.push(picked);
    }

    console.log(answer);
    return answer;
	}

  const GenerateAnswerBind = this.GenerateAnswer.bind();

  this.RestartGame = function (resultArea, answer, input) {
    resultArea.innerHTML = '';
    answer = GenerateAnswerBind(input);
    input.value = '';
    input.placeholder = '';

    return answer;
  }
}