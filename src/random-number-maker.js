export default function randomNumberMaker(randomNumberLength) {
    const maxNum = 9;
    const minNum = 1;
    const range = maxNum - minNum + 1;
    let randomNumberArray = [];

    while (randomNumberArray.length < randomNumberLength) {
        let randomNumber = Math.floor((Math.random() * range) + minNum);

        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }
    }

    return randomNumberArray;
}
