const computerInputNumbers = () => {
  const randomNumberList = Array.from({ length: 1000 }, (_v, i) => i).filter(v => {
    return v > 100 && new Set(String(v)).size >= 3;
  });
  const randomNumber = MissionUtils.Random.pickNumberInList(randomNumberList);
  console.log(randomNumber);
  return randomNumber;
};

export { computerInputNumbers };
