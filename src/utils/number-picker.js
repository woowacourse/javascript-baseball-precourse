const { pickNumberInRange } = MissionUtils.Random;

export const pickRandomNumbers = (count, min, max) => {
    const pickedNumbers = [];
    
    while (pickedNumbers.length < count) {
        const randomNumber = pickNumberInRange(min, max);
        
        if (!pickedNumbers.includes(randomNumber)) {
            pickedNumbers.push(randomNumber);
        }
    }

    return pickedNumbers.join('');
}