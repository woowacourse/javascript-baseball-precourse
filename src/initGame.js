export default function InitGame() {
	this.StartGame = function (input) {
    input.focus();
	  let answer = [];
	  let candidate = [];
  
	  for (let i = 1; i <= 9; i++)
		candidate.push(i);
  
	  for (let i = 0; i <= 2; i++) {
		  let picked = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		  answer.push(picked);
    }
    
    return answer;
	}
  
  let StartGameBind = this.StartGame.bind();

  this.RestartGame = function (resultArea, answer, input) {
    resultArea.innerHTML = '';
    answer = StartGameBind(input);
    input.value = '';
  }
}