export const setAnswer = () => {
    let computerInputNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(computerInputNumbers);
    return computerInputNumbers;
};