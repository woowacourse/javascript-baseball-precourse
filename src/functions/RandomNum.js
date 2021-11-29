export const getRandom = () => {
    let numList = new Array();
    let comNum = '';

    while (numList.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numList.includes(num)) {
        numList.push(num);
        comNum += String(num);
      }
    }

    return comNum;
  };