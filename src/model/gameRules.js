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

        let strikeCount = (ballCount = 0);
        userNumberArray.forEach((value, index) => {
            if (value === computerNumbers[index]) strikeCount++;
            else if (computerNumbers.includes(value)) ballCount++;
        });

        return { strike: strikeCount, ball: ballCount };
    }
}
