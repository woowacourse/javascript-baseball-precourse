export function isDuplicationThreeDigits(numbers) {
    return (
        numbers[0] === numbers[1] ||
        numbers[0] === numbers[2] ||
        numbers[1] === numbers[2]
        );
}
  
export function getRandomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}