
const { pickNumberInRange } = MissionUtils.Random;

export function getComputerNumbers() {
    const numbers = new Set();
    while(numbers.size < 3) numbers.add(pickNumberInRange(1, 9));

    return [...numbers].join('')
}