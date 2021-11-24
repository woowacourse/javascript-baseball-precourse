export function pickRandomNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return randomNumbers.join("");
}
