// 컴퓨터 난수 생성
export const getComputerNumber = () => {
  let number = "";
  let checkUseNumber = new Array(10).fill(false);

  while (number.length < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (checkUseNumber[newNumber]) continue;

    checkUseNumber[newNumber] = true;
    number += newNumber.toString();
  }

  return number;
};
