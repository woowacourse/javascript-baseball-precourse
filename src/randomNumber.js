//1. 랜덤한 숫자 생성
function generateRandomNumber() {
  const computerNumber = new Array();

  while (computerNumber.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computerNumber.indexOf(randomNumber.toString()) === -1) {
      computerNumber.push(randomNumber.toString());
    }
  }
  //console.log(computerNumber);
  return computerNumber;
}

export default generateRandomNumber;
