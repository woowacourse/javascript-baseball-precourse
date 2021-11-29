export function createAnswer() {
  const answer = [];
  
  while(answer.length !== 3) {
    const random = MissionUtils.Random.pickNumberInRange(1, 9);

    if(!answer.includes(random)) {
      answer.push(random);
    }
  }
  console.log(answer);
  return answer;
}

function setButtom() {
}

function clearButton() {

}