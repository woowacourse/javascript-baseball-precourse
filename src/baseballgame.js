export default class BaseballGame {
    constructor() {
        this.computerNumber = [];
    }

    setComputerNumber() {
        while(this.computerNumber.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!this.computerNumber.includes(randomNumber)) this.computerNumber.push(randomNumber);
        }
    }
}
