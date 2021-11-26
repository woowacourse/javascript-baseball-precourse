export default class GameRuleModel {
    constructor() {
        this.init();
    }

    init() {
        this.answer = this.generateNumberArray;
    }

    get generateNumberArray() {
        const pickNumberInRange = MissionUtils.Random.pickNumberInRange;

        const resultNumbers = new Set();
        while (resultNumbers.size < 3) {
            resultNumbers.add(pickNumberInRange(1, 9));
        }

        return [...resultNumbers];
    }

    getGameHint(userNumberArray) {
        const computerNumbers = this.answer;
        const result = {
            strike: 0,
            ball: 0,
        };
        userNumberArray.forEach((value, index) => {
            if (value === computerNumbers[index]) result.strike++;
            else if (computerNumbers.includes(value)) result.ball++;
        });

        return result;
    }
}
