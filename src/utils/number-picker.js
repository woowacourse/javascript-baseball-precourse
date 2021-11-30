export const pickRandomNumbers = count => {
    const pickedNumbers = [];
    
    while (pickedNumbers.length < count) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        
        if (!pickedNumbers.includes(randomNumber)) {
            pickedNumbers.push(randomNumber);
        }
    }

    return pickedNumbers.join('');
}